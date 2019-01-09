import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import  SearchTab from './components/SearchTab'
// import Context from './components/Context'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchTab />
      </div>
    );
  }
}

export default App;
