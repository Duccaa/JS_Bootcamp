import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Footer from './components/Footer'
import Form from './components/Form';
import Quotes from './components/Quotes';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/form">Create New</Link>
    </nav>
  )
}

const App = () => {
  const [citati, setCitati] = useState([])
console.log(citati)
  return (
    <Router>
      <Nav />  
      <Switch>
        <Route exact path="/">
          <Quotes citati={citati}/>
        </Route>
        <Route path="/form">
          <Form setCitati={setCitati}/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


