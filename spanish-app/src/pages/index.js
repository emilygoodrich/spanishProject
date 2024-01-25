import React from 'react'
import words from '../components/all-words.json'
import book from '../pics/book.png'
import ear from '../pics/ear.png'
import pencil from '../pics/pencil.png'
const Home = ({lan}) => {
    const curLan = words.find((word) => word.lan === lan)
    const header1 = curLan.home1
    const header2 = curLan.home2
    //const paragraph1 = curLan.home3
    const three = curLan.home4
    return (
        <>
            <div>
                <h1 id="titleTitle">{header1}</h1>
                <h2>{header2}</h2>
            </div>
            <div>
                <div class="homeSection">
                   <img src={book} alt="book" class="icon"/> 
                   <img src={ear} alt="ear" class="icon"/> 
                   <img src={pencil} alt="pencil" class="icon"/> 
                </div>
                <div class="homeSection">
                    {three.map((one) => (
                        <div>{JSON.parse(JSON.stringify(one))}</div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home