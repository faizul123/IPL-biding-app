import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	//Initialize state
	state = {data:{}};

   componentDidMount() {
	console.log("Component did mount");
    console.log(this.getName());
  }

  getName = () => {
    // Get the passwords and store them in state
    fetch('/api/hello/faizul')
      .then(res => res.json())
      .then(data => {
		this.setState({data:data});
	});
  }

  render() {
	const {data} = this.state;
    return (data != null) ? (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {data.name}-</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    ):
    (
	<div>No name </div>
);
  }
}

export default App;
