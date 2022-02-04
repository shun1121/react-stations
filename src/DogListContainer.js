// DO NOT DELETE
import { useState, useEffect } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState({})
  
  useEffect(() => {
    const url = 'https://dog.ceo/api/breeds/list/all' 
    fetch(url)
    .then(res => res.json())
    .then(data => setBreeds(data.message))
  },[])

  return breeds
}