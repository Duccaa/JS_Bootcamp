import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
    const [persons, setPersons] = useState([])
    const [filter, setFilter] = useState('')

    return (
        <div>
            <h2>Dodajte novi kontakt</h2>     
            <PersonForm persons={persons} setPersons={setPersons} />

            <h2>Pretražite imenik</h2>
            <Filter setFilter={setFilter} />
            
            <h2>Imenik</h2>
            <Persons persons={persons} filter={filter} />
        </div>
    )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
