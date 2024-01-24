import React from 'react'
import {Link} from 'react-router-dom'
import LanguageToggle from './languageToggle'
const Navbar = () => {
    return (
        <div id="navbar">
        <div>
            <Link to='/'>Home</Link>
            <Link to='/music'>Music</Link>
            <Link to='/words'>Words</Link>
        </div>
            <LanguageToggle /> 
        </div>
    )
}

export default Navbar