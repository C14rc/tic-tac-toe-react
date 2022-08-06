import './App.css';

const Title = () => {
  return (<div>
    Press R to restart
  </div>)
}

const onButtonClick = (index, buttonValues) => {

}

const Button = (props) => {
  return (
    <button onClick={() => onButtonClick(props.index, props.buttonValues)} className={props.className}>
      {props.data}
    </button>
  )
}

const Buttons = (props) => {
  return (
    <div className='button-container'>
      {props.buttonValues.map((buttonValue, index) => <Button className={'button-' + (index + 1)} index={index} buttonValues={props.buttonValues} />)}

    </div>
  )
}
function App() {
  var buttonValues = ['', '', '', '', '', '', '', '', '']
  return (
    <div>
      Tic Tac Toe
      <Title />
      <Buttons buttonValues={buttonValues} />
    </div>

  );
}

export default App;
