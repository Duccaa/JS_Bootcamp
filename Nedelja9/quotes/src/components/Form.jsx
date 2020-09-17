import React, { useState } from 'react'
import {v1 as uuidv1} from 'uuid'

const Form = ({setCitati}) => {
    const [autor, setAutor] = useState('')
    const [text, setText] = useState('')
    const [link, setLink] = useState('')
  
    const addCitat = (e) => {
      e.preventDefault()
      let tmp = {
        autor: 'autor',
        text: 'text',
        url: 'url',
        id: uuidv1()
      }
      setCitati(prev => prev.concat(tmp))
    }

    return (
      <form onSubmit={addCitat}>
        <input type="text" placeholder="Uneti ime autora" onChange={(e) => setAutor(e.target.value)} />
        <input type="text" placeholder="Uneti citat" onChange={(e) => setText(e.target.value)} />
        <input type="text" placeholder="Uneti link za dodatni info"onChange={(e) => setLink(e.target.value)} />
        <input type="submit" value="Dodaj citat" />
      </form>
    )
  }

  export default Form