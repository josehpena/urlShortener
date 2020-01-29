const { Router } = require('express');

const UrlController = require('../src/controllers/UrlController');
const SearchController = require('../src/controllers/SearchController');

const routes = Router();

routes.get('/', UrlController.listUrls);
routes.get('/:short', UrlController.redirectTo)
routes.post('/url', UrlController.store);
routes.get('/search', SearchController.index);

module.exports = routes;