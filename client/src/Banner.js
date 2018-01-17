import React, { Component } from 'react';
import Login from './Login';

class Banner extends Component {

  render() {
	
	var style = {
		height:'100vh'
	};
    return (

	<div className="container" style={style}>
		<div className="row">			
		<div className="col-md-8">
			<img src = {this.props.bannerImgURL} className="img-fluid" alt="IPL 2018" />
		</div>
		<div className="col-md-4">
			<Login />
		</div>
		</div>
	</div>
    );
  }
}

export default Banner;
