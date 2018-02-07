import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
 	
 	constructor(props){
 		super(props);
 		this.counter = 0;
 		this.handleLogin = this.handleLogin.bind(this);
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
 		const username = this.state.username;
 		const password = this.state.password;
 		
 	}
 
  render() {
  console.log(this.counter++);
  
    return (
	<form className="form-signin">
         <h2 className="form-signin-heading">Please sign in</h2>
	 <div className="form-group">
         	<label htmlFor="inputEmail" className="sr-only">Email address</label>
	         <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
	         	onChange={(event) => this.setState({username:event.target.value}) }	          required></input>
	 </div>
	 <div className="form-group">
         <label htmlFor="inputPassword" className="sr-only">Password</label>
         <input type="password" id="inputPassword" className="form-control" placeholder="Password"
         	onChange={(event) => this.setState({password:event.target.value}) }	 required></input>
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
