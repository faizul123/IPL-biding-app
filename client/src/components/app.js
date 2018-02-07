import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './banner/Banner';
import Login from './login/Login';
import Signup from './signup/signup';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{

	render(){
	
		return (
			<Router>
				<Switch>
		    		<Route exact path='/' render={(props) => <Banner page="login" />} />
		    		<Route exact path='/login' component={Banner} />
		    		<Route exact path='/signup' page="signup" component={Banner} />
			 	</Switch>
	     	</Router>
		);
	
	}
}

export default App;
