const pg = require('pg');

//db_config
const db_config = require('./../config/db_config');

const pool = new pg.Pool(db_config.config);

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

module.exports.insert = (client, sql) => {
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

