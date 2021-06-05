const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const fileUpload = require('express-fileupload');
const fs = require('fs');

router.use(fileUpload());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));



module.exports = router;