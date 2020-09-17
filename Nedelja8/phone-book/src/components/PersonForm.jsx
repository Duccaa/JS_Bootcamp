import React, { useState } from 'react'
import { useEffect } from 'react'

const PersonForm= ({persons, setPersons}) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setError()
        }, 1800);
        return () => clearTimeout(timer);
    }, [error]);

// ovo je za konzol log da se ispise osoba, poslednja dodata    
    useEffect(() => {
        const interval = setInterval(() => {   
            console.log(persons[persons.length-1])
        }, 2000);
        return () => clearInterval(interval);
    }, [persons]); 

    const isValid = (name, number) => name !== '' &&
        number !== '' &&
        number.length > 11 &&
        number.length < 14 &&
        number[0] === '+' &&
        !Number.isNaN(Number(number.slice(1)))

    const isDuplicate = (name, arr) => arr.some(el => el.name === name)

    const errorMessage = (name, number, ) => {
        if (name === '' || number === '') {
            setError('Polja ne smeju biti prazna')
        }
        else if (number[0] !== '+') {
            setError('Telefon mora biti unet u formatu +xxx xxxxxxxxx')
        }
        else if (number.length < 12 || number.length > 13) {
            setError('Polje sa brojem telefona mora imati 11 ili 12 karaktera (ne računajući +)')
        }
        else if (Number.isNaN(Number(number.slice(1)))){
            setError('Polje sa brojem mora sadržati samo brojeve (izuzev prvog karaktera +)')
        }
        //setTimeot(() => {
        //     setError('')
        // }, 1555)
    }
   
    const replaceContact = (name) => {
        let tmp = [...persons]
        let index = tmp.findIndex(el => el.name === name)
        tmp.splice(index, 1, {name: name, number: number})
        setPersons(tmp)
    }

    const addContact = (e) => {
        e.preventDefault()
        if(isValid(name, number)){
            if(isDuplicate(name, persons)){
                if(window.confirm(`Kontakt: ${name} vec postoji, da li zelite da zamenite broj?`)){
                    replaceContact(name)
                }
            }
            else{
                // setPersons([...persons, {name: name, number: number}])
                setPersons(persons.concat({name: name, number: number}))
            }
        }
        else{
            console.log('Neisparavan unos');
            errorMessage(name, number)
        }
    }

    return (
        <div>
        <form onSubmit={addContact}>
            <input type="text"placeholder="Unesite ime" onChange={(e) => setName(e.target.value)} />
            <input type="text"placeholder="Unesite broj telefona" onChange={(e) => setNumber(e.target.value)}/>
            <button type="submit">Dodaj</button>
        </form>
        <p>{error}</p>
        </div>
    )

}

export default PersonForm