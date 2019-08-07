const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();

router.get('/*', (req,res) =>{
    console.log('react 요청');
    console.log(req.headers['user-agent']);
    res.sendFile(path.join(__dirname+'/../disit/index.html'));
    
})

module.exports = router;