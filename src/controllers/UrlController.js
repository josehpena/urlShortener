const axios = require('axios');
const UrlS = require('../models/urlShort');

module.exports = {
    async listUrls(req, res){
        const list = await UrlS.find()
        return res.json(list)
    }
    ,
    async redirectTo(req, res){
        let short = req.params.short
        const url = await UrlS.find({
            shortUrl: {$in: short}
        })
        return res.redirect(url[0].urlO)
    }
    ,
    async store (req, res){

        const { urlO } = req.body;
        let urlSz = RandomInt(5,10)
        let shortUrl = Math.random().toString(36).substring(urlSz)

        const url = await UrlS.create({
            urlO,
            shortUrl,
        });
        return res.json(url);
    }

};

function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };