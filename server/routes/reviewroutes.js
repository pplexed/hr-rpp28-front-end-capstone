const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const axios = require('axios');
const token = require('../../config.js')
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=22125'

// default options as middleware
router.use(fileUpload());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const options = {
  method: 'get',
  url: url,
  headers: token.auth
}

router.get('/product', (req, res) => {
  console.log('working');
  getReviews((err, data) => {
    console.log('we are here');
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

const getReviews = (callback) => {

  axios(options)
    .then((response) => {
      callback(null, response.data);
    });
};

// module.exports.getReviews = getReviews;
module.exports = router;