module.exports = (req,res) => {
    //config
    const config = require('../../config/config');

    const url = req.url.split('?')[0];
    console.log(url);

    config.passUrl.map((psUrl) => {
        if(psUrl = url) {

        }
    })

    



}