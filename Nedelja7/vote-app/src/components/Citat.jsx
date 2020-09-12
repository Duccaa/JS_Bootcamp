import React from 'react'

const Citat = ({txt, citat, votes}) => {
    return (
        <>
        <h1>{txt}</h1>
        <p>{citat}</p>
        <p>Ima {votes} glasova</p>
        </>
    )
}

export default Citat