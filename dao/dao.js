
//DB
const pgDB = require('./pgDatabase');

//DB Mapper
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper([ 'db_mapper/TbUserMapper.xml' ]);

module.exports.getUserInfo = (loginId) => {
    return new Promise((resolve, reject) => {
        try{
            const params = {
                user_login_id: loginId
            }
            const sql = mybatisMapper.getStatement('TbUserMapper', 'select', params);
    
            
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