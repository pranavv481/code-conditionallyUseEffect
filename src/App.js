import React, { Component } from 'react';
import './App.css';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounterTwo from './components/HookCounterTwo';



class App extends Component {


  render() {
    return (
      <div className="App">
        <ClassCounterTwo />
        <HookCounterTwo />

      </div>
    );
  }
}

export default App;
