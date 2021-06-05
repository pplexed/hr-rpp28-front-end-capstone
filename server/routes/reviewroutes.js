
const axios = require('axios');
const token = require('../../config.js')
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=22125'

const options = {
  method: 'get',
  url: url,
  headers: token.auth
}

const getReviews = (callback) => {

  axios(options)
    .then((response) => {
      callback(response.data);
    });

};

module.exports.getReviews = getReviews;