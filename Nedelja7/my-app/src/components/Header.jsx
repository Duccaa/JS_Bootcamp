import React from 'react' 

const Header = ({ name, handleKlik }) => {
    return (
        <>
            <p>{name}</p>
            <button onClick={handleKlik}>КЛИК</button>
        </>
    )
}

export default Header
