import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './components/Statistics';

const App = () => { 
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  
  return (
    <div>
      <h1>Dodaj Ocenu:</h1>
      <button onClick={() => setGood(good + 1)}>pozitivno</button> 
      <button onClick={() => setBad(bad + 1)}>negativno</button> 
      <button onClick={() => setNeutral(neutral + 1)}>neutralno</button> 
      <h1>Statistika:</h1>
      <Statistics 
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </div>
  )
}

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

