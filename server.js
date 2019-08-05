const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const react = require('./routes/react');
const axios = require('./routes/axios');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const RedisStore = require('connect-redis')(session);

const config = require('./config/config');

app.use(cookieParser());
app.use(session({
    store: new RedisStore(config.redisConfig),
    key:'sid',
    secret: 'nms',
    resave: false
}))

app.use(express.static(__dirname+'/disit'));
app.use('/nms/sub',express.static(__dirname+'/disit'));

app.use(bodyParser.json());

app.use('/nms',react);
app.use('/axios',axios);


const server = app.listen(3000, () => {
    console.log('start NODE_NMS_WEBSERVER');
    //console.log(crypto);
})

