const router = require('express').Router();

var products = require('./../../dataSource.json').products;

router.get('/', function (req, res, next) {
  let page = req.query.page;
  let size = req.query.size;

  if (!page && !size) {
    return res.json({ products });
  }

  let start = size * (page - 1);
  let end = size * page > products.length
    ? products.length
    : page * size;

  let result = [];
  for (let i = start; i < end; i++) {
    result.push(products[i]);
  }

  return res.json({ "products": result });

});

module.exports = router;