import React from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';


function App() {
  
  return (
    <Router className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </Router>
  );
}

export default App;
