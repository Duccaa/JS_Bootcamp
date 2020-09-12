import React, { useState, useEffect } from 'react'

// const Country = ({country, showInfo}) => {

//     const [showInfo, setShowInfo] = useState(false)  
//     const onClick = () =>setShowInfo(true)


//     return (
//         showInfo ? 
//         <span>Glavni grad: {country.capital} | Broj stanovnika: {country.population} | Zastava: <img src={country.flag} alt={'flag'} style={{width: '60px'}}/></span>
//         :
//         <></>
//     )    
// }
// export default Country

export const Country = ({ country, isOnlyOne }) => {
    const [visible, setVisible] = useState(false)
    const [text, setText] = useState('More info')

    const detail = () => {
        return ( 
            <>
                <span>Capiatl: {country.capital} |  Population: {country.population} | Flag: <img style={{ width: '90px' }} alt='country flag' src={country.flag} /></span>  
            </>
        )
    }

    useEffect(() =>{
            setText(visible ? 'Less info' : 'More info')
    }, [text])

    return (
        <div>
            <p>Country: 
            {country.name} 
            {
            isOnlyOne ? 
            detail() 
            : 
            <button style={{ marginLeft: '10px' }} onClick={() => {
                setVisible(visible ? false : true) 
                setText()
            }}>{text}</button>
            }
            </p>
            {visible && !isOnlyOne ? detail() : ''}
        </div>
    )
} 