const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const axios = require('axios');
const token = require('../../config.js');

const router = express.Router();
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

router.use(fileUpload());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const product_id = 22134;

router.get('/relatedItems', (req, res) => {
  // Turn this line on when app goes live
  // const builtUrl = url + `/products/${req.data.product_id}/related`;

  // Turn this line off when app goes live
  const builtUrl = url + `/products/${product_id}/related`;

  const options = {
    method: 'get',
    url: builtUrl,
    headers: token.AUTH
  };

  console.log('options', options);

  axios(options)
    .then(({ data }) => {
      return (Promise.all(data.map((id) => {
        const builtUrl = url + `/products/${id}`;
        const options = {
          method: 'get',
          url: builtUrl,
          headers: token.AUTH
        }
        return axios(options)
          .then(({ data }) => {
            itemData[data.id] = data;
          });
      })));
    }).then((itemData) => {
      res.send(itemData);
    }).catch((err) => {
      console.log(err);
    });
});

module.exports = router;