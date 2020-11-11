import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <label>Hours</label>
        <input type="text" name="hours" />
        <label>Minutes</label>
        <input type="text" name="minutes" />
        <label>Seconds</label>
        <input type="text" name="seconds" />
      </div>
      <div>
        Screen
     </div>
      <div>
        <button>start</button>
        <button>pause</button>
      </div>
    </div>
  );
}

export default App;
