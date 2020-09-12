import React from 'react'
import {Country} from './Country'


const Countries = ({countries, filter}) => {

    const filteredCountry = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

    // const [showInfo, setShowInfo] = useState(false)  
    // const onClick = () =>setShowInfo(true)

    const displayCountry = (filteredCountry) => {
        if(filter === '') {
            return <p>Pocnite pretragu da bi se prikazali rezultati</p>
        }
        else if(filteredCountry.length === 0) {
            return <p>Za unete parametre nema odgovarajucih rezultata</p>
        
        }
        else if(filteredCountry.length === 1) {
            // return filteredCountry.map(country => <p key={country.numericCode}>Naziv drzave: {country.name} | Glavni grad: {country.capital} | Broj stanovnika: {country.population} | Zastava: <img src={country.flag} alt={'flag'} style={{width: '60px', height: '60px'}}/></p>)
            return filteredCountry.map(country => <Country key={country.numericCode} country={country} isOnlyOne={true}/>)
        }
        else if(filteredCountry.length > 1 && filteredCountry.length <= 10) {
            // return filteredCountry.map(country => <p key={country.numericCode}>Naziv drzave: {country.name} {Show()}</p>)
            // return filteredCountry.map(country =><p key={country.numericCode}>{country.name}<Country country={country} showInfo={showInfo}/><button onClick={onClick}>Vise informacija</button></p>)
            return filteredCountry.map(country => <Country key={country.numericCode} country={country} isOnlyOne={false}/>)
        }
        else if(filteredCountry.length > 10) {
           return <p>Rezultet pretrage je prevelik, unesite jos parametara za pretragu</p>
        } 
    }

    return (
      displayCountry(filteredCountry)
    )
}

export default Countries