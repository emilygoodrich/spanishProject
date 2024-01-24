import React from 'react'
import mon_laferte from '../components/mon_laferte.jpeg'
import selena from '../components/selena.jpg'
const Music = () => {
    return (
        <>
            <img src={mon_laferte} alt="mon laferte" />
            <img src={selena} alt="selena" />
            <div>more words about the artists</div>
            <div>and some others that i didn't like a lot</div>
        </>
    )
}

export default Music