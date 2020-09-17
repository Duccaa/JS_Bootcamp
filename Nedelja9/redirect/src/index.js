import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'

const Home = () => {
  return (
    <p>HOME</p>
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
const Login = ({setUser, users}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form onSubmit={(e) => {
      e.preventDefault
        if(users.some(user => user.username === username && user.password === password)){
          setUser(username)
        }
        else{
          console.log('nispravan unos')
        }
    }}>
      <input type="text" onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" onChange={(e) => setPassword(e.target.value)}/>
      <input type="submit" value="login" />
    </form>
  )
}

const App = ({users}) => {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          {user ? <Contact /> : <Redirect to="/login" />}
        </Route>
        <Route path="/about" render={() => user ? <About /> : <p>niste ulogovani</p>} />
        <Rounte exact path="/login">
          <Login setUser={setUser} users={users} />
        </Rounte>
      </Switch>
    </Router>
  )
}

const users = [
  {
    username: 'Pera',
    password: 'asdf'
  },
  {
    username: 'Ana',
    password: '1234'
  }

]

ReactDOM.render(
  <React.StrictMode>
    <App users={users}/>
  </React.StrictMode>,
  document.getElementById('root')
)
