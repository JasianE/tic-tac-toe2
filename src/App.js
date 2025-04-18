import logo from './logo.svg';
import gameboard from './logic/gameboard';
import Tile from './components/Tile';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [board, setBoard] = useState(gameboard())
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [winner, setWinner] = useState('empty')
  const [counter ,setCounter] = useState(1)
  function changeTile(tile){
    //First set the board 
    if(tile.getCheck() != 'empty' || winner != 'empty'){
      return
    }
    tile.changeCheck(currentPlayer); 
    let newBoard = [...board]
    let location = tile.getLocation()
    newBoard[location[0]][location[1]] = tile;
    setBoard(newBoard)
    if(currentPlayer == 'X'){
      setCurrentPlayer('O')
    } else {
      setCurrentPlayer('X')
    }
    checkIfDone(currentPlayer, location)
    let num = counter + 1;
    setCounter(num)
    console.log(counter)
    if(counter == 9){
      console.log('hello')
      setWinner('Draw')
    }
  }
  function replay(){
    setBoard(gameboard());
    setWinner('empty')
    setCounter(0)
  }
  function checkIfDone(){
    //Check rows
    if (
      board[0][0].getCheck() && 
      board[0][0].getCheck() === board[0][1].getCheck() &&
      board[0][1].getCheck() === board[0][2].getCheck()
    ) {
      setWinner(board[0][0].getCheck());
    } else if (
      board[1][0].getCheck() && 
      board[1][0].getCheck() === board[1][1].getCheck() &&
      board[1][1].getCheck() === board[1][2].getCheck()
    ) {
      setWinner(board[1][0].getCheck());
    } else if (
      board[2][0].getCheck() && 
      board[2][0].getCheck() === board[2][1].getCheck() &&
      board[2][1].getCheck() === board[2][2].getCheck()
    ) {
      setWinner(board[2][0].getCheck());
    } else if (
      board[0][0].getCheck() && 
      board[0][0].getCheck() === board[1][0].getCheck() &&
      board[1][0].getCheck() === board[2][0].getCheck()
    ) {
      setWinner(board[0][0].getCheck());
    } else if (
      board[0][1].getCheck() && 
      board[0][1].getCheck() === board[1][1].getCheck() &&
      board[1][1].getCheck() === board[2][1].getCheck()
    ) {
      setWinner(board[0][1].getCheck());
    } else if (
      board[0][2].getCheck() && 
      board[0][2].getCheck() === board[1][2].getCheck() &&
      board[1][2].getCheck() === board[2][2].getCheck()
    ) {
      setWinner(board[0][2].getCheck());
    } else if (
      board[0][0].getCheck() && 
      board[0][0].getCheck() === board[1][1].getCheck() &&
      board[1][1].getCheck() === board[2][2].getCheck()
    ) {
      setWinner(board[0][0].getCheck());
    } else if (
      board[0][2].getCheck() && 
      board[0][2].getCheck() === board[1][1].getCheck() &&
      board[1][1].getCheck() === board[2][0].getCheck()
    ) {
      setWinner(board[0][2].getCheck());
    }
    
  }
  return (
    <div>
      <h1 className='center'>{winner == 'empty' ? null : winner == 'Draw' ? "It's a draw!" : `The winner is player ` + winner + '!'}</h1>
      <div className="board">
      {board.map((key) => { //Generate the tile board by mapping through the 2d array with 2 loops
        return key.map((tile) => {
          return <Tile tile = {tile} handleChange = {changeTile} key = {tile.key}/> //Generate each tile by passing in the tile props
        })
      })}
      </div>
      <button className='replay-button' onClick={replay}>Replay</button>
    </div>
    
  );
}

export default App;
