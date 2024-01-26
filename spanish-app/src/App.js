import './App.css';
import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Music from './pages/music'
import Home from './pages/index'
import Words from './pages/words'
import Navbar from './components/navbar.js'
import Phrases from './pages/phrases.js'
function App() {
const [lan, setLan] = useState('eng')
  // useEffect(() => {
  //     console.log('change')
  //     const lan = JSON.parse(localStorage.getItem('lan'));
  //     if (lan) {
  //         setLan(lan)
  //         console.log(`${lan} local`)
  //     }
  // }, [lan])
  // use state here to track the language selected
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar lan={lan} setLan={setLan} />
        </div>
        <Routes>
          <Route exact path='/' element={<Home lan={lan}/>}/>
          <Route path='/music' element={<Music lan={lan}/>}/>
          <Route path='/words' element={<Words lan={lan}/>}/>
          <Route path='/phrases' element={<Phrases lan={lan}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
