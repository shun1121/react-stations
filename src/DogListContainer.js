// DO NOT DELETE
import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(['initial'])
  const [selectedBreed, setSelectedBreed] = useState('')
  
  useEffect(() => {
    const url = 'https://dog.ceo/api/breeds/list/all' 
    fetch(url)
    .then(res => res.json())
    .then(data => setBreeds(Object.keys(data.message)))
  },[])

  const handleChange = (e) => {
    setSelectedBreed(e.target.value)
  }

  console.log(selectedBreed)
  return (
    <BreedsSelect list={breeds} val={selectedBreed} handleChange={handleChange} />
  )
}