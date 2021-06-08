const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const axios = require('axios');
const token = require('../../config.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

router.use(fileUpload());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const options = {
  method: 'get',
  url: url,
  headers: token.AUTH
};

//NON-API Photo upload Logic (TomHo)
router.post('/uploadphoto', (req, res) => {
  console.log('upload post received');

  console.log(Object.keys(req.files));

  if (req.files.answerpic) {
    fs.writeFile(`./client/dist/${req.files.answerpic.name}`, req.files.answerpic.data, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
      res.send(`http://localhost:3000/${req.files.answerpic.name}`);
    });

  }
});



module.exports = router;