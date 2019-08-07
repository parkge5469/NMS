module.exports = (req,res,decoded) => {

        //DAO
        const dao = require('../../dao/dao');

        //ip
        const ip = require('ip');

        //crypto
        const crypto = require('crypto');

        //IDCreator
        const IDCreator = require('../../utils/IDCreator');


        const reqData = decoded.data;
        //console.log(JSON.stringify(decoded));
        // console.log(reqData);
        
        const id = reqData.id;
        const pw = reqData.pw;
        let jsonData = {
            msg: '',
            st: '',
        }
        const promise = dao.getLoginHist(decoded.formId);

        if(id!=''&&pw!='') {
            promise.then((result) => {
                // console.log(decoded);
                // console.log(result.rows[0]);
                if(undefined === result.rows[0]) {
                    dao.getUserInfo(id)
                    .then((data) => {
                        //console.log(data.rows[0].user_id);
                
                        const key = data.rows[0].user_id;
                        const value = key+pw;
                        const hash = crypto.createHmac('sha384', 'asdf').update(value).digest('hex');
                        // console.log(hash);
                        // console.log(data.rows[0].user_pw);
                        
                        if(5===data.rows[0].fail_cnt) {
                            let param = {
                                form_id: decoded.formId,
                                user_login_id: reqData.id,
                                server_ip: ip.address(),
                                client_ip: req.connection.remoteAddress,
                                user_agent: req.headers['user-agent'],
                                login_status_cd: 'S04',
                                rmk: '비밀번호 5회 잠김 오류',
                                reg_id: data.rows[0].user_id,
                            }

                            
                            dao.insertLoginHist(param)
                            .then((suc) => {
                                //console.log(suc);
                                
                            })
                            .catch((err) => {
                                return Promise.reject(err);
                            })

                            jsonData = {
                                msg: '비밀번호 5회이상 틀려 계정이 잠겼습니다.',
                                error_LV: 'nomal',
                                st: 'error',
                            }
                            res.json(jsonData);
                        } else {
                            
                            if(hash === data.rows[0].user_pw) {
                                //로그인 성공
                                return dao.getUserSession(key)
                                .then((result) => {
                                    const param = {
                                        form_id: decoded.formId,
                                        user_login_id: reqData.id,
                                        server_ip: ip.address(),
                                        client_ip: req.connection.remoteAddress,
                                        user_agent: req.headers['user-agent'],
                                        login_status_cd: 'S01',
                                        rmk: '로그인 성공',
                                        reg_id: data.rows[0].user_id,
                                    }
                                    dao.insertLoginHist(param)
                                    .then((suc) => {
                                        //console.log(suc);
                                        const key = Buffer.alloc(32);
                                        key.write(decoded.formId);
                                        const cipher = crypto.createCipher('aes-256-ecb',key);

                                        let encrypted = cipher.update(JSON.stringify(result.rows[0]));
                                        encrypted = Buffer.concat([encrypted, cipher.final()]);

                                        let enc = encrypted.toString('hex');

                                        //console.log(enc);
                                        
                                        const jwtKey = decoded.jwtId+IDCreator.createLongId();
                                        
                                        req.session.user = enc;
                                        req.session.form_id = decoded.formId;
                                        req.session.jwt_token = jwtKey

                                        jsonData = {
                                            jwt_token: jwtKey,
                                            msg: '로그인 성공',

                                        }
                                        res.json(jsonData);
                                        
                                    })
                                    .catch((err) => {
                                        return Promise.reject('insertLoginHist : '+err);
                                    })
                                })
                                .catch((err) => {
                                    return Promise.reject('getUserSession-'+err);
                                })                        

                            } else {
                                let param = {
                                    form_id: decoded.formId,
                                    user_login_id: reqData.id,
                                    server_ip: ip.address(),
                                    client_ip: req.connection.remoteAddress,
                                    user_agent: req.headers['user-agent'],
                                    login_status_cd: 'S03',
                                    rmk: '비밀번호 오류',
                                    reg_id: data.rows[0].user_id,
                                }
    
                                dao.insertLoginHist(param)
                                .then((suc) => {
                                    //console.log(suc);
                                    param = {
                                        user_id: data.rows[0].user_id,
                                        fail_cnt: data.rows[0].fail_cnt
                                    }
                                    dao.updateFailCNT(param)
                                    .then((result) => {
                                        //console.log(result);
                                        jsonData = {
                                            msg: '비밀번호가 일치하지 않습니다.',
                                            st: 'error',
                                            error_LV: 'nomal',
                                        }
                                        res.json(jsonData);
                                    })
                                    .catch((err) => {
                                        return Promise.reject('updateFailCNT err- '+err);
                                    })
                                })
                                .catch((err) => {
                                    return Promise.reject('insertLoginHist : '+err);
                                })
    
                                
                            }
                        }
                    
                    })
                    .catch((err) => {
                        console.log('/Login err : '+err);
                        const param = {
                            form_id: decoded.formId,
                            user_login_id: reqData.id,
                            server_ip: ip.address(),
                            client_ip: req.connection.remoteAddress,
                            user_agent: req.headers['user-agent'],
                            login_status_cd: 'S02',
                            rmk: '아이디 오류',
                            reg_id: ''
                        }

                        dao.insertLoginHist(param)
                        .then((suc) => {
                            //console.log(suc);
                        })
                        .catch((err) => {
                            return Promise.reject('insertLoginHist : '+err);
                        })

                        jsonData = {
                            msg: '아이디가 일치하지 않습니다.',
                            st: 'error',
                            error_LV: 'nomal',
                        }
                        res.json(jsonData);
                    })
                } else {
                    jsonData = {
                        msg: '이미 받은 요청입니다.',
                        error_LV: 'warning',
                        st: 'error'

                    }
                    res.json(jsonData);
                }
            })
            .catch((err) => {
                console.log('err getLoginHist-'+err);
            })
        
        } else if(id=='') {
            jsonData = {
                msg: '아이디를 입력하세요.',
                st: 'error',
                error_LV: 'nomal',
            }
            res.json(jsonData);
        } else {
            jsonData = {
                msg: '비밀번호를 입력하세요.',
                st: 'error',
                error_LV: 'nomal',
            }
            res.json(jsonData);
        }
    
}