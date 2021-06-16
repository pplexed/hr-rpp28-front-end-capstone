const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const axios = require('axios');
const token = require('../../config.js')
const urlReviews = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=22217&count=2'
const urlMeta = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=22147'

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
  console.log('this is the req should see 30:', req)
  getReviews(req.query.count, (err, data) => {
    if (err) {
      // console.log(err);
    } else {
      res.send(data);
    }
  });
});

router.get('/breakdown', (req, res) => {
  // console.log('working');
  getMeta((err, data) => {
    // console.log('we are here');
    if (err) {
      // console.log(err);
    } else {
      res.send(data);
    }
  });
});



//Helpers to get the actual data to pass back to the requests//

//Gets the reviews for the individual review tile
const getReviews = (num, callback) => {
let count = num || 2;
 let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=22147&count=${count}`
  axios({
    method: 'get',
    url: url,
    headers: token.AUTH
  })
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      callback(err, null);
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