import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,hashHistory } from 'react-router';
import Banner from './banner/Banner';
import Login from './login/Login';
import Signup from './signup/signup';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{

	render(){
	
		return (
			<Router history={hashHistory}>
        		<Route path='/' component={Banner} />
        		<Route path='/login' component={Banner} />
        		<Route path='/signup' page="signup" component={Banner} />
	     	</Router>
		);
	
	}
}

export default App;
