import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Programma from './components/Programma'
import Nieuws from './components/Nieuws'
import Navbar from './components/CustomNavbar'
import Smarties from './components/Smarties'
import Partners from './components/Partners'
import Gasten from './components/Gasten'
import ScrollToTop from './components/ScrollToTop'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Navbar />
            <Route exact path="/" component={ Home } />
            <Route path="/programma" component={ Programma } />
            <Route path="/nieuws" component={ Nieuws } />
            <Route path="/smarties" component={ Smarties } />
            <Route path="/partners" component={ Partners } />
            <Route path="/gasten" component={ Gasten } />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
