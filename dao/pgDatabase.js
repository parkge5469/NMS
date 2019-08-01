const pg = require('pg');

//db_config
const config = require('./../config/db_config');

const pool = new pg.Pool(config);

module.exports.connect= () => {
    return new Promise((resolve, reject) => {
        pool.connect((err,client,done) => {
            if(err) {
                reject(err);
            } else {
                done();

                resolve(client);
            }
        })
    })
}

module.exports.select = (client, sql) => {
    return new Promise((resolve, reject) => {
    
        client.query(sql, (err,result) => {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
}

