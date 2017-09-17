import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

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
    } 
  }

 render() {
    return (
      <div className="App">   
        <Header name={this.state.name}/>
      }
      </div>
    );
  }
}

export default App;
