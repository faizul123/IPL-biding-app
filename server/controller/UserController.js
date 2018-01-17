const User = require("../models/user");


exports.signup = function(req,res){
        var user = req.body;
	User.create(user,function(err,user){
		if(err){
		  console.log(err);
		  res.send({code:400,errors:err.errors});
		  res.status(400);
		  return;
		}
		console.log("user created ",user._id);
		
		//success flow
		res.send(
		{
		  message:"signup success",
		  user : user
		});
		
	});	
};

 exports.signin = function(req,res){
	var user = req.body;	
	User.findUserByUsername(user.username,function(err,user){
		if(err)
			throw err;
		console.log("found user",user._id);
	});
	res.send(
		{message:"signin success",user:user}
		);
 };



