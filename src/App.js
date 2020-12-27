import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Info from './components/pages/Info';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/info' component={Info}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
