import React from 'react'

const Quote = ({author, text, link}) => {
    
    return (
        <div>
            <p>Autor: {author}</p>
    <p><a href={link} target={'_blank'} rel="noopener noreferrer">Citat:</a>{text}</p>
        </div>
    )
}    
export default Quote