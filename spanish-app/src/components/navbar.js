import React from 'react'
import {Link} from 'react-router-dom'
import LanguageToggle from './languageToggle'
import words from './all-words.json'
const Navbar = ({ lan, setLan }) => {
    const curLan = words.find((word) => word.lan === lan)
    console.log(curLan)
    const home = curLan.t1
    const music = curLan.t2
    const wordsPage = curLan.t3
    return (
        <div id="navbar">
        <div>
            <Link to='/'>{home}</Link>
            <Link to='/music'>{music}</Link>
            <Link to='/words'>{wordsPage}</Link>
        </div>
            <LanguageToggle lan={lan} setLan={setLan} /> 
        </div>
    )
}

export default Navbar