const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

//test
const crypto = require('crypto');

// const pgDB = require('../dao/pgDatabase');
// const dao = require('../dao/dao');
// const config = require('../config/config');
// const app = express();


//Login 로그인 
router.get('/Login', (req,res) => {
    if(undefined !== req.session.jwt_token) {
        const jwt_token = req.session.jwt_token;
        // console.log(req.query.token);
        // console.log(jwt_token);
        console.log('asd');
        jwt.verify(req.query.token,jwt_token, (err,decoded) => {
            if(err) {
                const jsonData = {
                    msg: '요청한 데이터가 변조되었습니다.',
                    error_LV: 'warning',
                    st: 'error'
                }
                console.log('/Login jwt : '+err);
                res.json(jsonData);
            } else {
                require('./fn/login')(req,res,decoded);
            }
        })
    } else {
        console.log('asdfasdfasdf')
    }
})

//SignUp 회원가입
router.get('/SignUp', (req,res) => {
    require('./fn/signUp')(req,res);
})

//Jwt Key 최초 생성
router.get('/CreateJwt', (req,res) => {
    try {
        const IDCreator = require('../utils/IDCreator');
        const cliKey = req.query.key;
        const serverKey = IDCreator.createLongId();
    
        req.session.jwt_token = cliKey+serverKey;
        res.send(cliKey+serverKey);
    } catch(err) {
        console.log('/SignUp err : '+ err);
    }
    
})


module.exports = router;

const test = () => {
    let text = '42343242';
    // let iv = crypto.randomBytes(32);
    let key = Buffer.alloc(32);
    key.write('432423');

    let cipher = crypto.createCipher('aes-256-ecb', key);
    let encrypted = cipher.update(text);
   
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    let enc = encrypted.toString('hex');
    console.log(enc.length+"|"+enc);
}

test();