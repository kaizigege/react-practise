import React, { Component } from 'react';
import './asserts/css/App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>这是组件App！</h1>
        <Home/>
      </div>
    );
  }
}

export default App;
