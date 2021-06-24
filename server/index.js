const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const RIroutes = require('./routes/relatedItems_routes.js');
const review = require('./routes/reviewroutes.js')
const QAroutes = require('./routes/QA_routes.js');

const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./client/dist'));

// import routes
app.use('/qa', QAroutes);
app.use('/reviews', review);
app.use('/relatedItems', RIroutes);

app.get('/', (req, res) => {

  //res.send('basic get request received');
  // console.log('received a request at /');

  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
