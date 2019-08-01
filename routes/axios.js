const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const pgDB = require('../dao/pgDatabase');
const dao = require('./../dao/dao');


router.get('/Login', (req,res) => {
    const id = req.query.id;
    const pw = req.query.pw;
    let jsonData = {
        msg: '',
        st: '',
    }
    let msg = '';
    const promise = dao.getUserInfo(id);

    if(id!=''&&pw!='') {
        promise.then((data) => {
            console.log(data.rows[0].user_id);
    
            const key = data.rows[0].user_id;
            const value = key+pw;
            const hash = crypto.createHmac('sha384', 'asdf').update(value).digest('hex');
            // console.log(hash);
            // console.log(data.rows[0].user_pw);
    
            if(hash === data.rows[0].user_pw) {
                jsonData = {
                    msg: '로그인 성공',
                    st: true,
                }
                res.json(jsonData);
            } else {
                jsonData = {
                    msg: '비밀번호가 일치하지 않습니다.',
                    st: false,
                }
                res.json(jsonData);
            }
        
        })
        .catch((err) => {
            console.log('/Login err : '+err);
            jsonData = {
                msg: '아이디가 일치하지 않습니다.',
                st: false,
            }
            res.json(jsonData);
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


module.exports = router;