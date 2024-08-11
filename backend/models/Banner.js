const db = require('../config/db');

const Banner = {
    getBanner: (callback) => {
        db.query('SELECT * FROM banners LIMIT 1', callback);
    },
    updateBanner: (data, callback) => {
        db.query('UPDATE banners SET ? WHERE id = 1', data, callback);
    }
};

module.exports = Banner;
