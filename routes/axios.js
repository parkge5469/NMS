const express = require('express');

const router = express.Router();
const crypto = require('crypto');
const pgDB = require('../dao/pgDatabase');
const dao = require('../dao/dao');
const ip = require('ip');

const app = express();



router.get('/Login', (req,res) => {

    const reqData = JSON.parse(req.query.data);
    //console.log(Date.now());
    // console.log(reqData);
    
    const id = reqData.id;
    const pw = reqData.pw;
    let jsonData = {
        msg: '',
        st: '',
    }
    const promise = dao.getLoginHist(req.query.formId);

    if(id!=''&&pw!='') {
        promise.then((result) => {
            //console.log(result.rows[0]);
            if(undefined === result.rows[0]) {
                dao.getUserInfo(id)
                .then((data) => {
                    console.log(data.rows[0].user_id);
            
                    const key = data.rows[0].user_id;
                    const value = key+pw;
                    const hash = crypto.createHmac('sha384', 'asdf').update(value).digest('hex');
                    // console.log(hash);
                    // console.log(data.rows[0].user_pw);
                    
                    if(hash === data.rows[0].user_pw) {
                        if(5===data.rows[0].fail_cnt) {
                            const param = {
                                form_id: req.query.formId,
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
                                console.log(suc);
                            })
                            .catch((err) => {
                                return Promise.reject(err);
                            })

                        } else {
                            return dao.getUserSession(key)
                            .then((result) => {
                                const param = {
                                    form_id: req.query.formId,
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
                                    console.log(suc);
                                })
                                .catch((err) => {
                                    return Promise.reject('insertLoginHist : '+err);
                                })
                                req.session.user = result.rows[0];
                                jsonData = {
                                    msg: '로그인 성공',
                                    st: true,
                                }
                                res.json(jsonData);
                            })
                            .catch((err) => {
                                return Promise.reject('getUserSession-'+err);
                            })
                        }
                        
                       
                        
                    } else {
                        const param = {
                            form_id: req.query.formId,
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
                            console.log(suc);
                        })
                        .catch((err) => {
                            return Promise.reject('insertLoginHist : '+err);
                        })

                        jsonData = {
                            msg: '비밀번호가 일치하지 않습니다.',
                            st: false,
                        }
                        res.json(jsonData);
                    }
                
                })
                .catch((err) => {
                    console.log('/Login err : '+err);
                    const param = {
                        form_id: req.query.formId,
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
                        console.log(suc);
                    })
                    .catch((err) => {
                        return Promise.reject('insertLoginHist : '+err);
                    })

                    jsonData = {
                        msg: '아이디가 일치하지 않습니다.',
                        st: false,
                    }
                    res.json(jsonData);
                })
            }
        })
        .catch((err) => {
            console.log('err getLoginHist-'+err);
        })
    
    } else if(id=='') {
        jsonData = {
            msg: '아이디를 입력하세요.',
            st: false,
        }
        res.json(jsonData);
    } else {
        jsonData = {
            msg: '비밀번호를 입력하세요.',
            st: false,
        }
        res.json(jsonData);
    }
    
})

router.get('/SignUp', (req,res) => {
    require('./fn/signUp')(req,res);
})


module.exports = router;