import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import firebase from 'firebase';
import _ from 'lodash';

  
// styles in-component - pay attention to the syntax
const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif',
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      name: 'Gonzo',
      currentTitle: '',
      currentDetails: '',
    } 
  }

  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyDXf8A1LXSfOM8b0Hb02gX1uBxrLzIwfRM",
        authDomain: "notepad-ce4af.firebaseapp.com",
        databaseURL: "https://notepad-ce4af.firebaseio.com",
        projectId: "notepad-ce4af",
        storageBucket: "",
        messagingSenderId: "180317633862"
      }
    );

    console.log('Firebase success');

    firebase.database().ref('/notes')
      .on('value', snapshot => {
        const fbstore = snapshot.val();

        const store = _.map(fbstore, (value, id) =>{

          return {
            id: id,
            title: value.title,
            details: value.details,
          };
        });
        this.setState({
          notes: store
        })
      });
  
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name] : value
    });
  }

  handleSubmit(event){
   
   event.preventDefault();

   const data = {
    title: this.state.currentTitle,
    details: this.state.currentDetails,
   };

   firebase.database().ref('/notes').push(data, response => response);

   this.setState({
 
    currentTitle: '',
    currentDetails: ''
   });


  }

  deleteNote(id){
    firebase.database().ref(`/notes/${id}`).remove();
    console.log(`note with ${id} has been successfully deleted`);
  }
 render() {
    return (
      <div style={styles}>   
        <Header name={this.state.name}/>
        <Form 
          currentTitle={this.state.currentTitle}
          currentDetails={this.state.currentDetails} 
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <Grid notes={this.state.notes} deleteNote={this.deleteNote.bind(this)}/>

      </div>
    );
  }
}

export default App;
