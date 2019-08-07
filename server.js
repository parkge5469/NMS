const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const react = require('./routes/react');
const axios = require('./routes/axios');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const RedisStore = require('connect-redis')(session);

const config = require('./config/config');

//cookie 사용
app.use(cookieParser());

//session 사용 | Redis session store에 연동
app.use(session({
    store: new RedisStore(config.redisConfig),
    key:'sid',
    secret: 'nms',
    resave: false
}))

//정적파일
app.use(express.static(__dirname+'/disit'));
app.use('/nms/sub',express.static(__dirname+'/disit'));
app.use('/nms',express.static(__dirname+'/disit'));
app.use('/nms/main',express.static(__dirname+'/disit'));

//bodyParser 요청으로 넘어온 json 파일 파싱
app.use(bodyParser.json());

//router
app.use('/nms',react);
app.use('/axios',axios);

//404 error 처리
app.use((req, res, next) => {   
    //console.log(req)
    //throw new Error(req.url + ' not found');
    console.log();
    if('axios'!==req.url.split('/')[1]) {
    }
    res.status(404).redirect('/nms/404');

})

const server = app.listen(3000, () => {
    console.log('start NODE_NMS_WEBSERVER');
    //console.log(crypto);
})

