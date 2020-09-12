import React, { Component } from 'react';
// import './App.css';
import Inspiiration from './Components/Inspiiration';
import Header from './Components/Heeader';
import WhoWeAre from './Components/WhoWeAre';

class App extends Component {
  render(){
    return (
    <div className="App">
      <Header/>
      <Inspiiration/>
      <WhoWeAre/>
    </div>
  );
}
}

export default App;
