import { useCallback, useEffect, useState } from 'react';
import './App.css';


function App() {
  const [buttonValues, setButtonValues] = useState(['', '', '', '', '', '', '', '', ''])
  const [currentPlayer, setCurrentPlayer] = useState('x')


  const onKeyPress = useCallback((event) => {
    if (event.key === 'R' || event.key === 'r') {
      setButtonValues(['', '', '', '', '', '', '', '', ''])
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress, false)
  }, [onKeyPress])





  const onButtonClick = (index) => {
    if (buttonValues[index] === '') {
      buttonValues[index] = currentPlayer
      currentPlayer === 'x' ? setCurrentPlayer('o') : setCurrentPlayer('x')
    } else {
      alert('invalid move')
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

  return (
    <div>
      Tic Tac Toe
      <Title />
      <CurretPlayer />
      <Buttons />
    </div>

  );
}

export default App;
