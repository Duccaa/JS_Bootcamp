import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'

const List = ({users}) => {
  return (
    <>
    {users.map(user => {
      return ( <div key={user.id} >
    <Link to={`/user/${user.id}`}>{user.name}</Link>
    <br />
    </div>)
    })}
    </>
  )
}

const User = ({users}) => {
  const id = useParams().id
  const user = users.find(el => el.id === Number(id))

  return (
    <>
    {user ? <p>{user.name} || {user.age}</p> : <p>Korisnik sa ID: {id} ne postoji</p>}
    </>
  )
}
const App = () => {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Pera',
      age: 13
    },
    {
      id: 2,
      name: 'Ana',
      age: 32
    },
    {
      id: 3,
      name: 'Zika',
      age: 23
    }
  ])

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <List users={users} />
        </Route>
        <Route path="/user/:id">
          <User users={users}/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App users={users}/> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)