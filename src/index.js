import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

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
  const [xIsNext, setXIsNext] = useState(true)
  const handleClickeEvent = (i) => {
    const newSquare = [...squares];

    const winnerDeclared = Boolean(calculteTheWinner(newSquare))
    const squareFilled = Boolean(newSquare[i]);

    if(winnerDeclared || squareFilled){
      return;
    }

    newSquare[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquare)
    setXIsNext(!xIsNext)
  }
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClickEvent={() => handleClickeEvent(i)}
      />
    )
  }

  const reset = ()=>{
    setSquares(initialSquares)
    setXIsNext(true)
  }

  const winner = calculteTheWinner(squares);
  const status = winner? `Winner is : ${winner}`: `Next player is: ${xIsNext ? 'X':'O'}`
  return (
    <div >
      <div className='status'>
        <div>
        {status}
        </div>
        <button onClick={()=> reset()} className='new-game'>New Game</button>
      </div>
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
      Tic-Tac-Toe
      <Board />
    </div>
  )
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)

function calculteTheWinner(squares){
  const lines=[
    [0,1,2], [3,4,5], [6,7,8],//rows
    [0,3,6], [1,4,7], [2,5,8],//columns
    [0,4,8], [2,4,6]//diagonals
  ]
  for(let line of lines){
    const [a,b,c]=line;
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

