const pg = require('pg');

const config = {
    user: 'postgres',
    password: 'softfusion',
    database: 'nms',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

exports.select = (query,callback) => {
    const sql = query.sql;
    const value = query.value;

    pool.connect((err,client,done) => {
        if(err) {
            callback(err);
        }
        client.query(sql,value,(err,result) => {
            done();
            if(err) {
                callback(err);
            }
            callback(null,result);
        })
    })
}