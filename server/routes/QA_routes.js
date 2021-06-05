var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');


// default options as middleware
router.use(fileUpload());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());



//NON-API Photo upload Logic

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



// NON-API SEARCH LOGIC
router.get('/search/:searchterm', (req, res) => {
  console.log('search request received!', req.params.searchterm);
  res.send('GET search request received: ');
});


// GET QUESTION LIST
router.get('/questions', (req, res) => {
  res.send('report GET request received serverside router /questions');
});

//GET ANSWER LIST FOR GIVEN QUESTION
router.get('/questions/:question_id/answers', (req, res) => {
  console.log('returns answers for a given question', req.params.question_id);
  res.send('report GET request received serverside router /questions');
});


///ADD ANSWER FOR A GIVEN QUESTION
router.post('/questions/:question_id/answers', (req, res) => {
  res.send(`answer post received! with qid ${req.params.question_id}`);
});


///ADD QUESTION
router.post('/questions', (req, res) => {
  res.send(`received and returned, nickname:${req.body.nickname}, email:${req.body.email}, question:${req.body.question}`);
});



/////REPORT QUESTIONS

//Mark Question as Helpful
router.put('/questions/:question_id/helpful', (req, res) => {
  console.log('helpful question was selected', req.params.question_id);
  res.send('helpful answer click received on serverside with router!');
});

//Report Question
router.put('/questions/:question_id/report', (req, res) => {
  console.log('report was selected', req.params.question_id);
  res.send('report click received on serverside with router!');
});

//////////REPORT ANSWERS

//Mark Answer as Helpful
router.put('/answers/:answer_id/helpful', (req, res) => {
  console.log('helpful answer was selected', req.params.answer_id);
  res.send('helpful answer click received on serverside with router!');
});


//Report Answer
router.put('/answers/:answer_id/report', (req, res) => {
  console.log('report was selected', req.params.answer_id);
  res.send('report click received on serverside with router!');
});



module.exports = router