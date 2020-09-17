import React from 'react'
import {Link} from 'react-router-dom'

const Quotes = ({citati}) => {

    
    return (
       <div>
           {citati.map(citat => { 
           return (
           <div key={citat.id}>
           <Link to={`/quote/${citat.id}`}>{citat.text}</Link>
           </div>
           )})
           }
       </div>
    )
  }

  export default Quotes