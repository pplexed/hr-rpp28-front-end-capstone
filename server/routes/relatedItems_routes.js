const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const axios = require('axios');
const RI_TOKEN = require('../../config.js');

const router = express.Router();

router.use(fileUpload());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const deconstructQuery = (input, flag = '') => {
  if (input === undefined) {
    return '';
  }
  if (flag) {
    return `${flag}=${input}`;
  }
  return `/${input}`;
};

const handleRequest = (query, callback) => {
  const urlInfo = {};
  urlInfo.productId = deconstructQuery(query.productId);
  urlInfo.flag = deconstructQuery(query.flag);

  const axiosVar = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products${urlInfo.productId + urlInfo.flag}`;

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products${urlInfo.productId + urlInfo.flag}`, {
    headers: {
      'User-Agent': 'request',
      Authorization: RI_TOKEN.AUTH.Authorization,
    },
  })
    .then((data) => {
      callback(null, data.data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

router.get('/products', (req, res) => {
  handleRequest(req.query, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.get('/outfits', (req, res) => {
  console.log('In OutfitList API call outfits');
  res.send([1, 2, 3, 4]);
});

router.post('/interactions', (req, res) => {
  console.log('In OufitList API call interactions');
  res.send();
})

router.delete('/interactions', (req, res) => {
  console.log('In OutfitLIst API call delete');
  res.send();
})

module.exports = router;