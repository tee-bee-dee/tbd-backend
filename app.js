const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const morgan = require('morgan');

const router = require('./app/routes');

app.use(cors());
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use('/', router);

app.use('/doc', express.static(path.join(__dirname, 'doc')));

app.listen(port, () => {
  console.log('App listening on port ' + port);
});
