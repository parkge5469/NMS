
//DB
const pgDB = require('./pgDatabase');

//DB Mapper
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper([ 'db_mapper/TbUserMapper.xml' ]);
mybatisMapper.createMapper([ 'db_mapper/TbUserLoginHistMapper.xml' ]);
mybatisMapper.createMapper([ 'db_mapper/TbUserAuthMapper.xml' ]);

module.exports.getUserInfo = (loginId) => {
    return new Promise((resolve, reject) => {
        try{
            const params = {
                user_login_id: loginId
            }
            const sql = mybatisMapper.getStatement('TbUserMapper', 'selectLogin', params);
    
            
            pgDB.connect()
            .then((client) => {
                pgDB.select(client,sql) 
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    return Promise.reject(err);
                })
            })
            .catch((err) => {
                console.log('err : '+err);
                reject(err);
            })
        } catch(err) {
            console.log('err : '+err);
            reject(err);
        }
    })
    
}

module.exports.getUserSession = (userId) => {
    return new Promise((resolve, reject) => {
        try{
            const params = {
                user_id: userId
            }
            const sql = mybatisMapper.getStatement('TbUserMapper', 'selectSession', params);
    
            
            pgDB.connect()
            .then((client) => {
                pgDB.select(client,sql) 
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    return Promise.reject(err);
                })
            })
            .catch((err) => {
                console.log('err : '+err);
                reject(err);
            })
        } catch(err) {
            console.log('err : '+err);
            reject(err);
        }
    })
    
}

module.exports.getLoginHist = (formId) => {
    return new Promise((resolve, reject) => {
        try{
            const params = {
                form_id: formId
            }
            const sql = mybatisMapper.getStatement('TbUserLoginHistMapper', 'selectHist', params);
    
            
            pgDB.connect()
            .then((client) => {
                pgDB.select(client,sql) 
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    return Promise.reject(err);
                })
            })
            .catch((err) => {
                console.log('err : '+err);
                reject(err);
            })
        } catch(err) {
            console.log('err : '+err);
            reject(err);
        }
    })
    
}

module.exports.insertLoginHist = (param) => {
    return new Promise((resolve, reject) => {
        try{
            const params = param;
            const sql = mybatisMapper.getStatement('TbUserLoginHistMapper', 'insertHist', params);
    
            
            pgDB.connect()
            .then((client) => {
                pgDB.insert(client,sql) 
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    return Promise.reject(err);
                })
            })
            .catch((err) => {
                console.log('err : '+err);
                reject(err);
            })
        } catch(err) {
            console.log('err : '+err);
            reject(err);
        }
    })
    
}


module.exports.updateFailCNT = (param) => {
    return new Promise((resolve, reject) => {
        try{
            const params = param;
            const sql = mybatisMapper.getStatement('TbUserAuthMapper', 'updateFailCNT', params);
    
            
            pgDB.connect()
            .then((client) => {
                pgDB.insert(client,sql) 
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    return Promise.reject(err);
                })
            })
            .catch((err) => {
                console.log('err : '+err);
                reject(err);
            })
        } catch(err) {
            console.log('err : '+err);
            reject(err);
        }
    })
}

