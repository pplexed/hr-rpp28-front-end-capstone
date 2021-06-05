const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const review = require('./routes/reviewroutes.js')



const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./client/dist'));

app.get('/reviews', (req, res) => {
  review.getReviews((err, data) => {
    console.log('we are here');
    if (err) {
      console.log(err);
    } else {

      res.send(data);
    }
  })
});


app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});