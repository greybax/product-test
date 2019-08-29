const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Models & routes
app.use(require('./routes'));

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

app.listen(8000, () => console.log('Server running on http://localhost:8000/'));