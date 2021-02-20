import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Info from './pages/Info';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Placeholder from './pages/Placeholder';

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
        <Route path='/placeholder' component={Placeholder}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
