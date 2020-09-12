import React from 'react'

const Filter = ({setFilter}) => {
    return <input placeholder="Pocnite pretragu" onChange={(e) => setFilter(e.target.value)}/>
}
export default Filter