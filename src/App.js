// DO NOT DELETE

import React, { useState } from 'react'
import { Header } from './Header'
import { Description } from './Description'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg')
  const url = 'https://dog.ceo/api/breeds/list/all'
  const handleClick = async () => {
    await fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.message))
  }
  return (
    <div className='wrapper'>
      <Header />
      <Description img={dogUrl} onClick={handleClick} />
    </div>
  )
}
