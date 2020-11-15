import React, { useState } from 'react'
import './App.css';

function App() {
  const [hourInput, setHourInput] = useState('00')
  const [minuteInput, setMinuteInput] = useState('00')
  const [secondInput, setSecondInput] = useState('00')
  const [isHidden, setIsHidden] = useState(true)

  function handleStart() {
    setIsHidden(false)
  }

  function handleRestart() {
    setIsHidden(true)
  }
  
  return (
    <div id="app">
      {/* {isHidden && (

      )} */}
              <div className="inputContainer">
          <label>Hours</label>
          <input type="text" name="hours" onChange={(event) => { setHourInput(event.target.value) }} />
          <label>Minutes</label>
          <input type="text" name="minutes" onChange={(event) => { setMinuteInput(event.target.value) }} />
          <label>Seconds</label>
          <input type="text" name="seconds" onChange={(event) => { setSecondInput(event.target.value) }} />
        </div>
      {/* {!isHidden && (

      )} */}
              <div className="screenContainer">
          <span>{`${hourInput}:${minuteInput}:${secondInput}`}</span>
        </div>

      <div className="btnContainer">
        <button onClick={handleStart}>Start</button>
        <button>Pause</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}

export default App;
