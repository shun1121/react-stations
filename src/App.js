// DO NOT DELETE

import React, {useState} from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  console.log("aaaaaaa")
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg')
  const url = 'https://dog.ceo/api/breeds/image/random'
  const handleClick = async () => {
    await fetch(url)
    .then(res => res.json())
    .then(data => setDogUrl(data.message))
  }
  return (
    <div className='wrapper'>
      <header className='title'>dogアプリ</header>
      <p className='description'>犬の画像を表示するアプリです。</p>
      <button className='button' onClick={handleClick}>おせおせ</button>
      <div className='imgWrapper'>
        <img src={dogUrl} />
      </div>
    </div>
  )
}
