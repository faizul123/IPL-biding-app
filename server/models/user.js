const mongoose = require('mongoose');

//Define the schema
const Schema = mongoose.Schema;

var User = new Schema({
username : {type : 'string', required:true},
password : {type : 'string', required : true}
});
 
User.statics.findUserByUsername = function(username,callback){
       return this.findOne({username : username},'*',callback);
}

//Export the model
module.exports =  mongoose.model('User',User);

