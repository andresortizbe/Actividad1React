
import './App.css';
import './components/styleg.css'
import './components/gridsty.css';
import Expectations from  './components/Expectations';
import Learn from  './components/Learn';
import Interest from  './components/Interest';
import Profile from  './components/Profile';
function App() {
  return (
    <div className="App">
      <div class="grid-container">
            <div class="none"></div>
            <div class="profile"><Profile /></div>
            <div class="interest"><Interest /></div>
            <div class="learn"><Learn /></div>
            <div class="Expectativas"><Expectations /></div>
    </div>
    </div>
  );
}

export default App;
