const express = require('express');

const router = express.Router();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const axios = require('axios');

const token = require('../../config.js');

const serverUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/22125';

router.use(fileUpload());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const options = {
  method: 'get',
  url: serverUrl,
  headers: token.AUTH,
};
const getProducts = (callback) => {
  axios(options)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((error) => {
      console.log('error', error.response);
    });
};

router.get('/getOneProduct', (req, res) => {
  console.log('server recieved request for product info!');
  getProducts((err, data) => {
    if (err) {
      console.log('server error: ', err);
      res.status(404).send(err);
    } else {
      console.log('product came back:', data);
      res.status(200).send(data);
    }
  });
});

module.exports = router;
