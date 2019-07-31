const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.get('/Login', (req,res) => {
    const key = 'nms';
    const value = key+req.query.pw;

    const hash = crypto.createHmac('sha384', 'asdf').update(value).digest('hex');

    console.log(hash);
    res.send('sdfsdfs');
})


module.exports = router;