const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const axios = require('axios');
const token = require('../../config.js')
const urlReviews = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=22161&count=2'
const urlMeta = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=22123'

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


router.post('/uploadphoto', (req, res) => {
  // console.log('upload post received');

  // console.log(Object.keys(req.files));
  console.log(req)

  if (req.files.photo) {
    fs.writeFile(`./client/dist/${req.files.photo.name}`, req.files.photo.data, (err) => {
      if (err) {
        // return console.log(err);
      }
    //  console.log('The file was saved!');

      res.send('hey we made it this far');
    });
  }
});












//Helpers to get the actual data to pass back to the requests//

//Gets the reviews for the individual review tile
const getReviews = (num, callback) => {
let count = num || 2;
 let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=22161&count=${count}`
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