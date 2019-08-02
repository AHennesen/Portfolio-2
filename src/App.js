import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardPic from './components/CardPic';
import DropdownButton from './components/Dropdown'

function App() {
  return (
    <Router basename='portfolio-2'>
      <DropdownButton/>
        <Route exact path = '/' component = {CardPic} />
    </Router>
  );
};


export default App;
