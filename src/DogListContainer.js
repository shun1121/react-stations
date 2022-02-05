// DO NOT DELETE
import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(['initial', 'state'])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setLoading(true);
    const url = 'https://dog.ceo/api/breeds/list/all' 
    fetch(url)
    .then(res => res.json())
    .then(data => setBreeds(Object.keys(data.message)))
    .finally(() => {
      setLoading(false);
    });
  },[])

  const handleChange = (e) => {
    setSelectedBreed(e.target.value)
  }

  console.log(selectedBreed)
  return (
    <>
      {loading
        ? <p>Data is loading...</p>
        : <BreedsSelect list={breeds} val={selectedBreed} handleChange={handleChange} />
      }
    </>
  )
}