// DO NOT DELETE
import React from 'react'
import { DogImage } from './DogImage'

export const Description = (props) => {
  return (
    <>
      <p className='description'>犬の画像を表示するアプリです。</p>
      <button className='button' onClick={props.onClick}>おせおせ</button>
      <div className='imgWrapper'>
        <DogImage url={props.img} />
      </div>
    </>
  )
}