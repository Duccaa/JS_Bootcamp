import React from 'react' //d bi smo napravili komponentu moramo da imamo importovan react
import Osoba from './Osoba'

const Content = ({o1, o2, o3, a1, a2, a3}) => {
    return (
      <>
        <Osoba ime={o1} pice={a1} />
        <Osoba ime={o2} pice={a2} />
        <Osoba ime={o3} pice={a3} />
        {/* <p>{o1} | {a1}</p>
        <p>{o2} | {a2}</p>
        <p>{o3} | {a3}</p> */}
      </>
      // <></> ovo je JSX fragment, i prikazuje samo paragrafe, posto mozemo da returnujemo samo 1 elem, ovo je nacin da ih vratimo vise od 1
    )
  
  }
  export default Content