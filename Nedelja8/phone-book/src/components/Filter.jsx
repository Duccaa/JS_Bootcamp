import React from 'react'

const Filter = ({ setFilter }) => {
    return(
        <div>
            <input placeholder="Pocnite pretragu"
            onChange={(e) => 
            setFilter(e.target.value)} />
        </div>
    )
}

export default Filter