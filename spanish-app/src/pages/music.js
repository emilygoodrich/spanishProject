import React from 'react'
import mon_laferte from '../pics/mon_laferte.jpeg'
import selena from '../pics/selena.jpg'
import kevin from '../pics/kevin_kaarl.jpg'
import words from '../components/all-words.json'
const Music = ({lan}) => {
    const curLan = words.find((word) => word.lan === lan)
    const title = curLan.musict
    
    return (
        <>
        <h1>{title}</h1>
        <div>
            <div class="artistLineUp">
                <img src={mon_laferte} alt="mon laferte" class="artistas"/>
                <img src={selena} alt="selena" class="artistas"/>
                <img src={kevin} alt="kevin kaarl" class="artistas"/>
            </div>
            <div class="artistLineUp">
                <div>Mon Laferte</div>
                <div>Selena</div>
                <div>Kevin Kaarl</div>
            </div>
        </div>
        </>
    )
}

export default Music