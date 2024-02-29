import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const BoardStyle = {
  backgroundColor: 'skyblue',
  margin: 10,
  padding: 10
}


const Square = (props) => {
  return (
    <button
      className='square'
      onClick={props.onClickEvent}
    >
      {props.value}
    </button>
  )
}

const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares)
  const handleClickeEvent = (i) => {
    const newSquare = [...squares];
    newSquare[i]='X';
    setSquares(newSquare)
  }
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClickEvent={()=>handleClickeEvent(i)}
      />
    )
  }
  return (
    <div style={BoardStyle}>
      Board
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

const Game = () => {
  return (
    <div className='game'>
      Game
      <Board />
    </div>
  )
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)

