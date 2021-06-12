const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const axios = require('axios');
const token = require('../../config.js')
const urlReviews = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=22217'
const urlMeta = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=22216'

// default options as middleware
router.use(fileUpload());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const options = {
  method: 'get',
  url: urlReviews,
  headers: token.AUTH
}

router.get('/review-product', (req, res) => {
  console.log('this is the req:', req)
  getReviews((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

router.get('/breakdown', (req, res) => {
  console.log('working');
  getMeta((err, data) => {
    console.log('we are here');
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});



//Helpers to get the actual data to pass back to the requests//

//Gets the reviews for the individual review tile
const getReviews = (callback) => {

  axios(options)
    .then((response) => {
      callback(null, response.data);
    });
};

//Gets the meta for ALL of the reviews for the product breakdown section
const getMeta = (callback) => {

  axios({
    method: 'get',
    url: urlMeta,
    headers: token.AUTH
  })
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      callback(err, null)
    });
};

module.exports = router;