import React from 'react'
import { Redirect, useParams } from 'react-router-dom'

const Quote = ({citati}) => {

    const id = useParams().id
    const citat = citati.find(el => el.id === id)
    
    return citat ?
    (
        <div>
            <p>Autor: {citat.author}</p>
            <p><a href={citat.url} target="_blank" rel="noopener noreferrer">Ciatt:</a>{citat.text}</p>
        </div>
    )    
    :
    <Redirect to="/"/>
}    
export default Quote