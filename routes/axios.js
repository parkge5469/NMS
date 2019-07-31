const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.get('/Login', (req,res) => {

    const hash = crypto.createHmac('sha384', 'asdf').update(req.query.pw).digest('hex');

    console.log(hash);
    res.send('sdfsdfs');
})


module.exports = router;