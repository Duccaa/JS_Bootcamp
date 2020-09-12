import React from 'react'

const Statistics = ({good, neutral, bad}) => {
  if (good + bad + neutral === 0) {
    return <p>Jos uvek nema ocena</p>
  }
  else
  return (
    <>
    <p>Pozitivne ocene: {good !== 0 ? good: 0}</p>
      <p>Negativne ocene: {bad !== 0 ? bad: 0}</p>
      <p>Neutralne ocene: {neutral !== 0 ? neutral: 0}</p>
      <p>Ukupan broj ocena: {good + bad + neutral}</p>
      <p>Procenat pozitivnih ocena: {(good / (good + bad + neutral) * 100).toFixed(2)} %</p>
    </>
    )
}

export default Statistics