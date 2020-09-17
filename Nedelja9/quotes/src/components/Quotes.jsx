import React from 'react'
import Quote from './Quote'

const Quotes = ({citati}) => {

    
    return (
       <div>
           {citati.map(citat => <Quote 
                                    key={citat.id}
                                    author={citat.author}
                                    text={citati.text}
                                    link={citati.url}
                                />
           )}
       </div>
    )
  }

  export default Quotes