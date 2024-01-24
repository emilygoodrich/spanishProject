import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Music from './pages/music'
import Home from './pages/index'
import Words from './pages/words'
import Navbar from './components/navbar.js'
import ReadingJSON from './components/readingJSON.js'
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/music' element={<Music />}/>
          <Route path='/words' element={<Words />}/>
          <Route path='/read' element={<ReadingJSON />}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
