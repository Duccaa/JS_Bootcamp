1. Следећи садржај пребаците у index.js

Остале фајлове креиране са create-react-app обришите (App.js, App.css, App.test.js, logo.svg, serviceWorker.js)

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const pab = 'Jolly'
  const osoba1 = 'Пера'
  const alkohol1 = 5
  const osoba2 = 'Ана'
  const alkohol2 = 7
  const osoba3 = 'Жика'
  const alkohol3 = 13

  return (
    <div>
      <h1>{pab}</h1>
      <p>
        {osoba1} {alkohol1}
      </p>
      <p>
        {osoba2} {alkohol2}
      </p>
      <p>
        {osoba3} {alkohol3}
      </p>
      <p>Укупно пића: {alkohol1 + alkohol2 + alkohol3}</p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
2. Рефакторишите апликацију тако да садржи три компоненте (Header, Content, Ukupno)

Напомена: Сви подаци се идаље налазе у компоненти App, и прослеђују се даље осталим компонентама

Header садржи име паба
Content садржи имена особа и количину пића за сваку од њих
Ukupno садржи укупну количину пића
Апликација сада отприлике изгледа овако

const App = () => {
  // дефиниције константи (особе,пића,паб)

  return (
    <div>
      <Header pab={pab} />
      <Content ... />
      <Ukupno ... />
    </div>
  )
}
3. Рефакторисати компоненту Content тако да не рендерује директно имена и количину пића Већ рендерује 3 компоненте (нпр Osoba), и свакој прослеђује информације
const Content = ... {
  return (
    <div>
      <Osoba .../>
      <Osoba .../>
      <Osoba .../>
    </div>
  )
}
Напомена: За сада апликација прослеђује информације на примитиван начин, па ћемо то променити

4. Промените дефиниције константи, на следећи начин:
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

  return (
    <div>
      <Header ... />
      <Content ... />
      <Ukupno ... />
    </div>
  )
}

5. Поправите компоненте, тако да раде што су радиле до сад