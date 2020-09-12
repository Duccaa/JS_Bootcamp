import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import Ukupno from './components/Ukupno';

// const Header = ({ime}) => { //funkcija kao parametar uvek prima objekat
//   // let ime = props.ime  
//   // let { ime } = props
//   return ( // moze samo jedna komponenta
//     <header>
//       <h2>Hello {ime}</h2>
//     </header>
//   )
// }
// // komponenta je funkcija koja vraca jsx, odn nesto sto lici na html elem, ono sto vrati ce biti na stranici
// // JSX sintaksa (JavaScript XML)
// // function App(){}  moze funkcija i ovako da se napise 
// //konvencija je da se imena komponenti pisu velikim slovom odn PascalCase
// const App = () => {
//   console.log('Hello from React')
//   let great = 'Hello'
//   let a = 5
//   let b = 10
//   let imena = ['Pera', 'Zika', 'Ana']
//   const veci = (a, b) => { 
//     if(a > b) 
//     return a
//     else return b
//   }
//   // ovi parametri se ubacuju u objekat proprs (on sadrzi atribute)
//   return (
//     <div>
//       <Header ime={imena[0]} /> //ovo je poziv funkcije
//       <Header ime={imena[1]} />
//       <Header ime={imena[2]} />
//       //mogli smo umesto komponente da imamo obican html elem
//       // <header><h2>Hello {imena[0]}</h2></header>
//       <p>{great}</p>
//       <p>{a} + {b} = {a+b}</p>
//       <p> Veci od dva broja broja je 
            // jedan nacin {a > b ? a : b} 
//         {
//         veci(a, b)
//         }
//       </p> 
//     </div>
//   )
// }

const App = () => {
  const pab = {
    ime: 'Jolly',
    osobe: [
      {
        ime: 'Пера',
        alkohol: 5
      },
      {
        ime: 'Ана',
        alkohol: 7
      },
      {
        ime: 'Жика',
        alkohol: 13
      }
    ]
  }

  // let ukupno = pab.osobe[0].alkohol + pab.osobe[1].alkohol + pab.osobe[2].alkohol
  let ukupno = pab.osobe.reduce((ukupno,osoba) => ukupno + osoba.alkohol, 0)
  return (
    <div>
      <Header pab={pab.ime}/>
      <Content o1={pab.osobe[0].ime} o2={pab.osobe[1].ime} o3={pab.osobe[2].ime} a1={pab.osobe[0].alkohol} a2={pab.osobe[1].alkohol} a3 ={pab.osobe[2].alkohol} />
      <Ukupno ukupno={ukupno} />
    </div>
  )
}
// *{JSON.stringify(pab)}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


