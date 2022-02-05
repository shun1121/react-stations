// DO NOT DELETE
import React from 'react'

export const BreedsSelect = ({list, val, handleChange}) => {
  // console.log(props)
  // const breedlis = list.map((breedlist, i) => (
  //   <option key={i} value={breedlist}>{breedlist}</option>
  // ))
  // console.log(breedlis)
  const breedlists = list

  return (
    <select value={val} onChange={handleChange} >
      <option>選択してください</option>
      {breedlists.map((breedlist, i) => (
        <option key={i} value={breedlist}>{breedlist}</option>
      ))}
    </select>
  )
}
// jsxでhtml要素だけ使うなら{}ではなく、()を使う。