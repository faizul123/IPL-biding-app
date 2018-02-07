import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
 	
 	constructor(props){
 		super(props);
 		this.counter = 0;
 		this.userName= "";
 		this.password = "";
 		this.handleLogin = this.handleLogin.bind(this);
 		this.handleChange = this.handleChange.bind(this);
 	}
 	
 	componentWillMount(){
 		console.log("Before Login rendering...");
 	}
 	
 	componentWillUpdate(nextProps,nextState){
 		console.log("Before Login updating...");
 	}
 	
 	componentDidUpdate(prevProps, prevState){
 		console.log("After updating Login...");
 	}
 	
 	handleLogin(event){
 		event.preventDefault();
 		console.log(this.username);
	}
 	
 	handleChange(event){
 		this[event.target.name]= event.target.value;
 	}
 
  render() {
  console.log(this.counter++);
  
    return (
	<form className="form-signin">
         <h2 className="form-signin-heading">Please sign in</h2>
	 <div className="form-group">
         	<label htmlFor="inputEmail" className="sr-only">Email address</label>
	         <input type="email" name="username" id="inputEmail" className="form-control" placeholder="Email address"
	         	onChange={(event) => this.handleChange(event) }	          required></input>
	 </div>
	 <div className="form-group">
         <label htmlFor="inputPassword" className="sr-only">Password</label>
         <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password"
         	onChange={(event) => this.handleChange(event) }	 required></input>
	 </div>
         <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
         </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleLogin}>Sign in</button>
	</form>
    );
  }
}

export default Login;
