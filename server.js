const express = require('express');
const app = express();
const cors = require('cors');

// app.use(cors({
//     origin: 'http://localhost:3000',
//     exposedHeaders: ['WWW-Authenticate', 'Etag'],
//   }));

app.get('/Login', (req,res) => {
    console.log(req);
    res.send('sdfsdfs');
})

app.get('/', (req,res) => {
    res.send('gdgsdggsg');
})


const server = app.listen(3001, () => {
    console.log('start NODE_NMS_WEBSERVER');
})

