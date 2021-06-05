const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
var RIroutes = require('./routes/relatedItems_routes.js');


const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./client/dist'));

//import routes
var QAroutes = require('./routes/QA_routes.js');
app.use('/qa', QAroutes);

app.use('/relatedItems', RIroutes);


app.get('/', (req, res) => {

  //res.send('basic get request received');
  console.log('received a request at /');

});


app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});