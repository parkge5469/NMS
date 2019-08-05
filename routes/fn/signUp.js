module.exports = (req, res) => {
    //Validator
    const validator = require('validator');

    //DAO
    const dao = require('./../../dao/dao');

    //UUID
    const IDCreator = require('./../../utils/IDCreator');

    //Crypto
    const crypto = require('crypto');

    const data = req.query;

    // console.log(validator.isEmail(data.email));
    // console.log(validator.isMobilePhone(data.phone));
    if(validator.isEmail(data.email)&&validator.isMobilePhone(data.phone)) {
        const user_id = IDCreator.createSeqByUUID();
        const value = user_id+data.pw;
        const user_pw = crypto.createHmac('sha384', 'asdf').update(value).digest('hex');
        const param = {
            user_id: user_id,
            user_group_id: '',
            area_id: '',
            user_login_id: data.id,
            user_name: data.name,
            user_pw: user_pw,
            user_dv_cd: data.code,
            user_status_cd: '',
            user_email: data.email,
            user_phone: data.phone,
            user_addr: data.addr,
            user_origin_id: data.id,
            rmk: '',
            reg_id: '',
            reg_date: new Date()

        }

    } else if(!validator.isMobilePhone(data.phone)) {
        res.send('전화번호 양식이 다름');
    } else {
        res.send('이메일 양식이 다름');
    }




}