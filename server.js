const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

// app.use(cors({
//     origin: 'http://localhost:3000',
//     exposedHeaders: ['WWW-Authenticate', 'Etag'],
//   }));

app.use(express.static(__dirname+'/disit'));
app.use(bodyParser.json());
app.use('/test/sub',express.static(__dirname+'/disit'));

app.get('/Login', (req,res) => {
    console.log(req.query);
    res.send('sdfsdfs');
})
app.get('/test/*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/disit/index.html'));
});

app.get('/', (req,res) => {
    console.log('index.html');
    // fs.readFile('disit/index.html',(err,data) => {
    //     if(err){
    //         console.log(err);
    //     }else {
    //         //res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(data);
    //     }
    // })
})


const server = app.listen(3000, () => {
    console.log('start NODE_NMS_WEBSERVER');
})

