import React, { Component } from 'react';
import { connect } from 'react-redux'
// import logo from './logo.svg';
// import './App.css';


class App extends Component {
  render() {
    console.log(this.props.testStore)
    return (
      <div>
        <input type="text"/>
        <button>Add track</button>
        <ul>
          {this.props.testStore.map((track, index) => 
            <li key={index}>{track}</li>  
          )}
       </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App)
