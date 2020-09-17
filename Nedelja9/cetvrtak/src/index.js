
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom'
import Footer from './components/Footer'
import Form from './components/Form';
import Quotes from './components/Quotes';
import Quote from './components/Quote'

const App = () => {
  const [citati, setCitati] = useState([])
console.log(citati)
  return (
    <Router>
      <nav>
        <Link to="/">Citati</Link>
        <br />
        <Link to="/form">Dodajte citat</Link>
      </nav>
      
      <Switch>
        <Route exact path="/">
          <Quotes citati={citati}/>
        </Route>
        <Route path="/form">
          <Form setCitati={setCitati}/>
        </Route>
        <Route path="/quote/:id">
          <Quote citati={citati} />
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

