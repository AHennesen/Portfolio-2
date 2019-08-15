import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardPic from './components/CardPic';
import DropdownButton from './components/Dropdown';
import Portfolio from './components/SideCardPic';
// import Jumbo from './components/Jumbotron'

function App() {
  return (
    <Router basename='Portfolio-2'>
      <DropdownButton/>
        <Switch>
          <Route exact path = '/' component={CardPic} />
          <Route exact path = '/landing' component={CardPic} />
          {/* <Route exact path = '/Portfolio' component={Jumbo} /> */}
          <Route exact path = '/Portfolio' component={Portfolio} />
        </Switch>
    </Router>
  );
};

export default App;
