import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';


const App = () => {
  //React state
  //Komponenta koja sadrzi state je stateful komponenta
const [name, setName] = useState('Pera') //ono sto saljemo kao parametar funkcije useState je pocetna vrednost promenljive, ona vraca niz od dva elem - pocetnu vrednost i funkciju koja menja tu vrednost 
const [counter, setCounter] = useState(0) // bitno je da imamo pocetnu vrednost koja odgovara tipu
                                          // pocetna vrednost moze biti prazna '', 0, [], {}

const handleKlik = () => {
  setName('Zika')
}

// function renderCondition() {
//   if(counter === 0) {
//     return 'Jos uvek nije kliknuto'
//   } 
//   else
//     return counter
// // funkcija ne sme da vraca objekat
// }

  return (
    <>
    <Header name={name} handleKlik={handleKlik}/> 
    {/* ne pozivamo sami funkciju hendleKlik(), nego se ona poziva na klik, ako je mi poyovemo renderovace beskonacno */}
    {/* drugi nacin je da napravimo funkciju koja ce da pozove ovu funkciju handleKlik={() => handleKlik()} */}
      <p>{counter !== 0 ? counter: 'Jos uvek nije kliknuto'}</p>
      {/* <p>{renderCondition()}</p> ako je duze koristice se funkcija ako je krace onda je bolji ternarni operator*/ }
      <button onClick={() => setCounter(counter + 1)}>Povecaj broj</button>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

