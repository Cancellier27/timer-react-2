import React, { useState } from 'react'
import './App.css';

function App() {
  const [hourInput, setHourInput] = useState(0)
  const [minuteInput, setMinuteInput] = useState(0)
  const [secondInput, setSecondInput] = useState(0)
  const [isHidden, setIsHidden] = useState(true)

  function showTimeWithZeros(State) {
    if (State === '') State = 0
    return State >= 0 && State <= 9 ? `0${State}` : State
  }

  function handleStart() {
    setIsHidden(false)
    clockLogic()
  }

  function handleRestart() {
    setIsHidden(true)
  }

  function clockLogic() {
    let SecondInterval;
    if (hourInput === 0 && minuteInput === 0) {
      SecondInterval = setInterval(() => setSecondInput(secondInput => secondInput - 1 ) ,1000)
    }
  }

  return (
    <div id="app">
      {/* {isHidden && (

      )} */}
      <div className="inputContainer">
        <label>Hours</label>
        <input
          type="text"
          name="hours"
          onChange={(event) => { setHourInput(event.target.value) }} />
        <label>Minutes</label>
        <input
          type="text"
          name="minutes"
          onChange={(event) => { setMinuteInput(event.target.value) }} />
        <label>Seconds</label>
        <input
          type="text"
          name="seconds"
          onChange={(event) => { setSecondInput(event.target.value) }} />
      </div>
      {/* {!isHidden && (

      )} */}
      <div className="screenContainer">
        <span>{
        `${showTimeWithZeros(hourInput)}:
        ${showTimeWithZeros(minuteInput)}:
        ${showTimeWithZeros(secondInput)}`
        }</span>
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
