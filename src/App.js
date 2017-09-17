import React, { Component } from 'react';
import logo from './logo.svg';
import Intro from './Intro';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Gonzo',
    } 
  }

  componentDidMount() {
    console.log('Comoponent Just Loaded');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.name}, Welcome to React</h2>
        </div>
        <Intro name={this.state.name}/>
      </div>
    );
  }
}

export default App;
