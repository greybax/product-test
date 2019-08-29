const router = require('express').Router();

var products = require('./../../dataSource.json').products;

router.get('/', function (req, res, next) {
  let page = req.query.page;
  let size = req.query.size;

  if (!page && !size) {
    return res.json({ products });
  }

  let calcPage = products.length - (Math.floor(products.length / page));
  let calcSize = calcPage + size > products.length
    ? products.length
    : calcPage + size;

  let result = [];
  for (let i = calcPage; i < calcSize; i++) {
    result.push(products[i]);
  }

  return res.json({ "products": result });

});

module.exports = router;