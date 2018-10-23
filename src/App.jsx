import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Programma from './components/Programma'
import News from './components/News'
import Navbar from './components/CustomNavbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={ Home } />
          <Route path="/programma" component={ Programma } />
          <Route path="/news" component={ News } />
        </div>
      </Router>
    );
  }
}

export default App;