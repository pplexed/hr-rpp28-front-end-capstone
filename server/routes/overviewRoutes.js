const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const axios = require('axios');
const token = require('../../config.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=22125';

router.use(fileUpload());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const options = {
  method: 'get',
  url: url,
  headers: token.auth,
};

const getProducts = (callback) => {
  axios(options)
    .then((response) => {
      callback(null, response.data);
    });
};

router.get('/products/:product_id', (req, res) => {
  console.log('requested product info');
  getProducts((err, data) => {
    console.log('we are here');
    if (err) {
      console.log(err);
    } else {
      console.log('prodcut came back');
      res.send(data);
    }
  });
});

module.exports = router;
