import React from 'react';


export default function Cells({value, onCellClick }) {
  return (
    <button className='square' onClick={onCellClick}>{value}</button>
  )
}
