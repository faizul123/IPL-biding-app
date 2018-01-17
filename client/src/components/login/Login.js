import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  render() {
    return (
	<form className="form-signin">
         <h2 className="form-signin-heading">Please sign in</h2>
	 <div className="form-group">
         	<label htmlFor="inputEmail" className="sr-only">Email address</label>
	         <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required></input>
	 </div>
	 <div className="form-group">
         <label for="inputPassword" className="sr-only">Password</label>
         <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
	 </div>
         <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
         </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
	</form>
    );
  }
}

export default Login;
