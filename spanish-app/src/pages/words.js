import React, {useState, useEffect} from 'react'
import ReadingJSON from '../components/readingJSON.js'
import words from '../components/all-words.json'
const Words = () => {
    const [lan, setLan] = useState('')
    useEffect(() => {
        console.log('change')
        const lan = JSON.parse(localStorage.getItem('lan'));
        if (lan) {
            setLan(lan)
            console.log(`${lan} local`)
        }
    }, [lan])
    // console.log(lan)
    // const curLan = words.find((word) => word.lan === lan)
    // console.log(curLan)
    //const header1 = curLan.words1
    return (
        <>
            <h1>adfl</h1>
            <div id="wholeWordsSection">
                <ReadingJSON />
            </div>
        </>
    )
}

export default Words