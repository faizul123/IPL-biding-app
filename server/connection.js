mongoose = require('mongoose');

// Connecting to mongodb
const username = 'predictor';
const password = 'root123';
const isProduction = process.env.NODE_ENV == 'production' ? true : false;
const mongoDbURL = (isProduction) ? "mongodb://localhost:27017/predictor" 
				: "mongodb://${predictor}:${password}@ds117869.mlab.com:17869/heroku_vdmwtgg1";

mongoose.connect(mongoDbURL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB connection estabilished....');
});

exports = mongoose;
