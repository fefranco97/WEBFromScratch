import React, {useState} from 'react'
import Cells from './Cells'

export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(index) {
        const nextSquares = squares.slice();
        nextSquares[index] = "X";
        setSquares(nextSquares);
    }

  return (
    <>
        <div className='board-container'> 
            <div className='board-row'>
                <Cells value={squares[0]} onCellClick={() => handleClick(0)}/>
                <Cells value={squares[1]} onCellClick={() => handleClick(1)}/>
                <Cells value={squares[2]} onCellClick={() => handleClick(2)}/>
            </div>
            <div className='board-row'>
                <Cells value={squares[3]} onCellClick={() => handleClick(3)}/>
                <Cells value={squares[4]} onCellClick={() => handleClick(4)}/>
                <Cells value={squares[5]} onCellClick={() => handleClick(5)}/>
            </div>
            <div className='board-row'>
                <Cells value={squares[6]} onCellClick={() => handleClick(6)}/>
                <Cells value={squares[7]} onCellClick={() => handleClick(7)}/>
                <Cells value={squares[8]} onCellClick={() => handleClick(8)}/>
            </div>
        </div>
    </>
    
  )
}
