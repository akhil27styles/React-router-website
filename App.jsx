import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Home from './components/Home'
import Error from './components/Error'

import './App.css';
import {Switch,Route, Redirect} from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (
   <>
   <Navbar/>
     <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/contact" component={Contact}/>>
    <Route component={Error}/>
     </Switch>
   </>
  );
}

export default App;
