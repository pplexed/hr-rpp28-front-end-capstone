const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const axios = require('axios');
const TOKEN = require('../../config.js');

const router = express.Router();

router.use(fileUpload());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

// const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';
// const product_id = 22134;

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
  urlInfo.product_id = deconstructQuery(query.product_id);
  urlInfo.flag = deconstructQuery(query.flag);

  console.log('built string ', urlInfo.product_id + urlInfo.flag);
  const axiosVar = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products${urlInfo.product_id + urlInfo.flag}`;
  console.log('Axios Var: ', axiosVar);

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products${urlInfo.product_id + urlInfo.flag}`, {
    headers: {
      'User-Agent': 'request',
      Authorization: TOKEN,
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
// router.get('/relatedItems', (req, res) => {
//   // Turn this line on when app goes live
//   // const builtUrl = url + `/products/${req.data.product_id}/related`;

//   // Turn this line off when app goes live
//   var itemData = {};
//   const builtUrl = url + `/products/${product_id}/related`;

//   const options = {
//     method: 'get',
//     url: builtUrl,
//     headers: token.AUTH,
//   };
//   axios.defaults.headers.common['Authorization'] = token.TOKEN;

//   axios(options)
//     .then(({ data }) => {
//       return (
//         Promise.all(data.map((id) => {
//           return axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${id}`)
//             .then(({ data }) => {
//               return itemData[data.id] = data;
//             });
//         }))
//       );
//     }).then((itemData) => {
//       res.send(itemData);
//     }).catch((err) => {
//       console.log(err);
//     });
// });

// router.get(`/relatedItems/products/:product_id/styles`, (req, res) => {
//   const options = {
//     method: 'get',
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${product_id}/styles`,
//     headers: token.AUTH,
//   };

//   axios(options)
//     .then( (data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log('Error fetching styles data: ', err);
//     });
// });

module.exports = router;
