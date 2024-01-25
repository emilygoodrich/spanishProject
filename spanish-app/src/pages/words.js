import React from 'react'
import ReadingJSON from '../components/readingJSON.js'
import words from '../components/all-words.json'
const Words = ({lan}) => {
    const curLan = words.find((word) => word.lan === lan)
    console.log(curLan)
    const header1 = curLan.words1
    return (
        <>
            <h1>{header1}</h1>
            <div id="wholeWordsSection">
                <ReadingJSON />
            </div>
        </>
    )
}

export default Words