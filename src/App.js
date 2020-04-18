import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
/* import Logo from './Logo/Logo'; */
import Gallery from './components/Gallery';
import About from './components/About/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <NavLink to="/" className="Header-items new-logo" activeClassName="active">AARMA COLLECTIONS
            {/* <Logo /> */}

          </NavLink>{/* 
          <NavLink to="/" className="Header-items" activeClassName="active">Home</NavLink> */}
          <NavLink to="/about" className="Header-items" activeClassName="active">About</NavLink>
          <NavLink to="/gallery" className="Header-items" activeClassName="active">Gallery</NavLink>
        </div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;