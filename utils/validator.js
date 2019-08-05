const validator = require('validator');


module.exports.isEmail = (email) => {
    return validator.isEmail(email);
}

module.exports.isPhone = (phone) => {
    return validator.isMobilePhone(phone);
}