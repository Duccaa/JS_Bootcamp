import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const Home = () => {
  return (
    <p>Home</p>
  )
}

const About = () => {
  return (
    <p>About</p>
  )
}

const Contact = () => {
  return (
    <p>Contact</p>
  )
}
const App = () => {

  // const [page, setPage] = useState(Home)
  // const [page, setPage] = useState('home')
  // const render = () => {
  //   if(page === 'home') return <Home />
  //   if(page === 'about') return <About />
  //   if(page === 'contact') return <Contact />
  // }
  
  return (
    <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      {/* <button onClick={() => setPage(Home)}>HOME</button>
      <button onClick={() => setPage(About)}>ABOUT</button>
      <button onClick={() => setPage(Contact)}>CONTACT</button> */}
      {/* <button onClick={() => setPage('home')}>HOME</button>
      <button onClick={() => setPage('about')}>ABOUT</button>
      <button onClick={() => setPage('contact')}>CONTACT</button> */}
    </nav>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      {/* <Route path="/about" render={() => <About />}/> */}
    </Switch>
    {/* {page} */}
    {/* {render()} */}
    </ Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

