const Banner = require('../models/Banner');

exports.getBanner = (req, res) => {
    Banner.getBanner((err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result[0]);
    });
};

exports.updateBanner = (req, res) => {
    const { description, timer, link, isVisible } = req.body;
    const data = { description, timer, link, isVisible };
    Banner.updateBanner(data, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Banner updated successfully' });
    });
};