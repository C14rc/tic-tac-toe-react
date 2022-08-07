import { useCallback, useEffect, useState } from 'react';
import './App.css';


function App() {
  const [buttonValues, setButtonValues] = useState(['', '', '', '', '', '', '', '', ''])
  const [currentPlayer, setCurrentPlayer] = useState('x')
  const [win, setWinner] = useState('')



  const onKeyPress = useCallback((event) => {
    if (event.key === 'R' || event.key === 'r') {
      setButtonValues(['', '', '', '', '', '', '', '', ''])
      setCurrentPlayer('x')
      setWinner('')
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress, false)
  }, [onKeyPress])

  const checkWinner = useCallback(() => {
    let winner = ''
    //x
    //row check
    if ((buttonValues[0] === 'x' && buttonValues[1] === 'x' && buttonValues[2] === 'x')
      || (buttonValues[3] === 'x' && buttonValues[4] === 'x' && buttonValues[5] === 'x')
      || (buttonValues[6] === 'x' && buttonValues[7] === 'x' && buttonValues[8] === 'x')) {
      //winner x
      winner = 'x'
    }
    //column check
    if ((buttonValues[0] === 'x' && buttonValues[3] === 'x' && buttonValues[6] === 'x')
      || (buttonValues[1] === 'x' && buttonValues[4] === 'x' && buttonValues[7] === 'x')
      || (buttonValues[2] === 'x' && buttonValues[5] === 'x' && buttonValues[8] === 'x')) {
      //winner x
      winner = 'x'
    }

    //diagonal check
    if ((buttonValues[0] === 'x' && buttonValues[4] === 'x' && buttonValues[8] === 'x')
      || (buttonValues[6] === 'x' && buttonValues[4] === 'x' && buttonValues[2] === 'x')) {
      //winner x
      winner = 'x'
    }


    //o
    //row check
    if ((buttonValues[0] === 'o' && buttonValues[1] === 'o' && buttonValues[2] === 'o')
      || (buttonValues[3] === 'o' && buttonValues[4] === 'o' && buttonValues[5] === 'o')
      || (buttonValues[6] === 'o' && buttonValues[7] === 'o' && buttonValues[8] === 'o')) {
      //winner x
      winner = 'o'
    }
    //column check
    if ((buttonValues[0] === 'o' && buttonValues[3] === 'o' && buttonValues[6] === 'o')
      || (buttonValues[1] === 'o' && buttonValues[4] === 'o' && buttonValues[7] === 'o')
      || (buttonValues[2] === 'o' && buttonValues[5] === 'o' && buttonValues[8] === 'o')) {
      //winner x
      winner = 'o'
    }

    //diagonal check
    if ((buttonValues[0] === 'o' && buttonValues[4] === 'o' && buttonValues[8] === 'o')
      || (buttonValues[6] === 'o' && buttonValues[4] === 'o' && buttonValues[2] === 'o')) {
      //winner x
      winner = 'o'
    }
    setWinner(winner)
  }, [buttonValues])

  const onButtonClick = (index) => {
    if (win === '') {
      if (buttonValues[index] === '') {
        buttonValues[index] = currentPlayer
        currentPlayer === 'x' ? setCurrentPlayer('o') : setCurrentPlayer('x')
        checkWinner()
      } else {
        alert('invalid move')
      }
    }

  }

  const Title = () => <div>Press R to restart</div>

  const CurretPlayer = () => {
    return <div>CurretPlayer : {currentPlayer}</div>
  }

  const Button = (props) => {
    return (
      <button onClick={() => onButtonClick(props.index)} className={props.className}>
        {buttonValues[props.index]}
      </button>
    )
  }

  const Buttons = () => {
    return (
      <div className='button-container'>
        {buttonValues.map((_, index) => <Button key={'button-' + index} className={'button-' + (index + 1)} index={index} />)}
      </div>
    )
  }

  const Winner = () => {
    return <div>Winner : {win}</div>
  }

  return (
    <div>
      Tic Tac Toe
      <Title />
      <CurretPlayer />
      <Buttons />
      {win !== '' && <Winner />}
    </div>

  );
}

export default App;
