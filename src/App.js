import './App.css';
import React , {useState} from 'react';
import { Board } from './components/Board';
import { ScoreBoard } from './components/ScoreBoard';
import { ResetButton } from './components/RessetButton';

function App() {

  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScore] = useState({xScore:0, oScore:0})
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxindex) => {
    const updateBoard = board.map((value, index) =>{
      if (index === boxindex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    })
    const winner = checkWinner(updateBoard);

    if(winner) {
      if(winner === "O"){
        let {oScore} = scores;
        oScore += 1
        setScore({...scores, oScore})
      }else {
        let {xScore} = scores;
        xScore += 1
        setScore({...scores, xScore})
      }
    }

    setBoard(updateBoard);

    setXPlaying(!xPlaying);
  }

  const checkWinner = (board) => {
    for (let i = 0; i < winCondition.length; i++) {
          const [a, b, c] = winCondition[i];
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            setGameOver(true);
            return board[a];
          }
      }
    }
  
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className='App'>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
      <ResetButton resetBoard={resetBoard} />
    </div>
  )
}

export default App;
