import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import CardPic from './components/CardPic';

function App() {
  return (
    <Router basename='portfolio-2'>
    <Navbar />
    <CardPic />
    </Router>
  );
};


export default App;
