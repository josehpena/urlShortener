const UrlS = require('../models/urlShort');

module.exports = {
    async index(req, res){
        const { shortUrl } = req.query;

        const url = await UrlS.find({
            $in: shortUrl
        });

        return res.json({url});

    }

}