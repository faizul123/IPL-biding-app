import React, { Component } from 'react';
import Login from '../login/Login';
import Signup from '../signup/signup'

class Banner extends Component {

	constructor(props){
		super(props);	
	}

  render() {
	
	var wrapperStyle = {
		height:'100vh',
		margin:'0px',
		padding:'0px'		
	};
	var lftContainerStyle = {
		backgroundColor:'#ddf',
		height:'100vh'
	}
    return (

	<div className="container-fluid" role="wrapper" style={wrapperStyle}>
		<div className="row">			
			<div className="col-md-8">
				<div className="container-fluid" style={lftContainerStyle}></div>
			</div>
			
			<div className="col-md-4">
				
				{this.props.route.page == "login" ? <Login /> : <Signup />}
				
			</div>
		</div>
	</div>
    );
  }
}

export default Banner;
