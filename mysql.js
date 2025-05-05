const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hopihari_db',
    port: 3307,
});

exports.execute = (sql, params = [], pool = connection) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (error, results) => { // Fix: Changed 'query' to 'sql'
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};