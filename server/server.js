const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const connection = require('./connection');
const userController = require('./controller/UserController');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//set the body parser
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

// Define the user controller
app.post('/api/user/signup',userController.signup);
app.post('/api/user/signin',userController.signin);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Predictor listening on ${port}`);
