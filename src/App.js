import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Grid from './components/Grid';
import Form from './components/Form';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: 'Add Course Notes',
          details: 'Need to add more details to the course'
        },
        {
          id: 2,
          title: 'USe Unreal or Unity',
          details: 'asdasdasd'
        },
        {
          id: 3,
          title: 'Add Jss ',
          details: 'asdasd'
        },
      ],
      name: 'Gonzo',
      currentTitle: '',
      currentDetails: '',
    } 
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name] : value
    });
  }

 render() {
    return (
      <div className="App">   
        <Header name={this.state.name}/>
        <Grid notes={this.state.notes}/>
        <Form />
      </div>
    );
  }
}

export default App;
