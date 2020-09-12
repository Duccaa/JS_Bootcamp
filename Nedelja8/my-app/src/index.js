import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getAllCountries } from './services';
import Filter from './components/Filter';
import Countries from './components/Countries';
import './index.css';



const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getAllCountries().then(res => {
      setCountries(res.data)
      console.log(res.data)
    })
  }, [])


  return (
    <>
    <h1>Search Countries</h1>
    <Filter setFilter={setFilter} />
    <h1>Countries</h1>
    <Countries filter={filter} countries={countries}/>
    </>
  )
}
ReactDOM.render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
document.getElementById('root')
);

