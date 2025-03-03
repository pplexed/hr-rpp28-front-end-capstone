const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const axios = require('axios');
const token = require('../../config.js')
const urlReviews = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=22161&count=2'
const urlMeta = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=22123'

var AWS = require('aws-sdk');
// Set the Region
AWS.config.loadFromPath('./config.json');
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

  if (req.files.reviewphoto) {
    fs.writeFile(`./client/dist/${req.files.reviewphoto.name}`, req.files.reviewphoto.data, (err) => {
      console.log('did we make it?')
      if (err) {
        // return console.log(err);
      } else {
        s3 = new AWS.S3({apiVersion: '2006-03-01'});

// call S3 to retrieve upload file to specified bucket
        var uploadParams = {Bucket: 'review-widget2', Key: '', Body: ''};
        var file = `./client/dist/${req.files.reviewphoto.name}`;

        // Configure the file stream and obtain the upload parameters

        var fileStream = fs.createReadStream(file);
        fileStream.on('error', function(err) {
          console.log('File Error', err);
        });
        uploadParams.Body = fileStream;
        var path = require('path');
        uploadParams.Key = path.basename(file);

        // call S3 to retrieve upload file to specified bucket
        s3.upload (uploadParams, function (err, data) {
          if (err) {
            console.log("Error", err);
          } if (data) {
            console.log("Upload Success", data);
            res.send(data);
          }
        });
      }
    //  console.log('The file was saved!');

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