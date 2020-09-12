import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Citat from './components/Citat';

const App = ({ citati }) => {

const [selected, setSelected] = useState(0) // Селектован је нулти цитат
const [votes, setVotes] = useState(new Array(citati.length).fill(0))
const [best, setBest] = useState(0)

const vote = () => {
  let temp = [...votes] // kopiranje niza
  temp[selected]++
  setVotes(temp)
  // sa map (losiji nacin)
  // setVotes(votes.map((vote, index) => index == selected ? vote + 1 : vote))
}

const updateBest = () => {
  votes[best] > (votes[selected] +1) ? setBest(best) : setBest(selected)
}

  return (
    <div>
        <Citat citat={citati[selected]} votes={votes[selected]} txt={'Trenutni citat:'}/>
        {/* <p>{citati[selected]} </p>{/* Приказујемо селектован цитат*/}
        {/* <p> Ima {votes[selected]} glasova</p>   */}
        <button onClick={() => setSelected((selected + 1) % citati.length)}>Sledeci citat</button>
        <button onClick={() => {
          vote()
          updateBest()
          }}>Glasaj za citat</button>
        <hr /> 
        <h1></h1>
        <Citat citat={citati[best]} votes={votes[best]} txt={'Citat sa najvise ocena:'}/>
        {/* <p>{citati[best]}</p>
        <p> Ima {votes[best]} glasova</p> */}
    </div>
  )

}
//druga aplikacija
// const Citat = ({citat}) => {
//   return (
//     <>
//     <h2>Citat:</h2>
//     <p>{citat}</p>
//     </>
//   )
// }

// const App = ({ citati }) => {

//   // function h() {
//   //   console.log('hello')
//   //   return () => console.log('hello')
//   // }

//   return (
//     // <p onClick={h()()}>Hello</p>
//     <>
//     <h1>Render kolekcije</h1>
//     {/* {citati.map(citat => <p key={citat}>{citat}</p>)} */}
//     {citati.map(citat => <Citat key={citat} citat={citat}/>)}
//     </>
//   )
// }

const citati = [
  'I\'m not dumb. I just have a command of thoroughly useless information.',
  'Чудно је како је мало потребно да будемо срећни, и још чудније: како нам често баш то мало недостаје!',
  'Што не боли – то није живот, што не пролази – то није срећа',
  'Звезданог неба и људског срца никад се човек неће моћи нагледати',
  'Be yourself; everyone else is already taken.',
  'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
  'If you tell the truth, you don\'t have to remember anything.',
  'Insanity is doing the same thing, over and over again, but expecting different results.',
  'A day without sunshine is like, you know, night.'  
]

ReactDOM.render(
  <React.StrictMode>
  <App citati={citati}/>
</React.StrictMode>,
document.getElementById('root')
);
