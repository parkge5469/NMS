const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const react = require('./routes/react');
const axios = require('./routes/axios');


app.use(express.static(__dirname+'/disit'));
app.use('/nms/sub',express.static(__dirname+'/disit'));

app.use(bodyParser.json());

app.use('/nms',react);
app.use('/axios',axios);


const server = app.listen(3000, () => {
    console.log('start NODE_NMS_WEBSERVER');
    //console.log(crypto);
})

