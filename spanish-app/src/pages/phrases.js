import React from 'react'
import words from '../components/all-words.json'
function Phrases({lan}) {
    const curLan = words.find((word) => word.lan === lan)
    const phrases = curLan.p
    return (
        <div>
            {phrases.map((one) => (
                        <h1 class="ph">{JSON.parse(JSON.stringify(one))}</h1>
            ))}
        </div>
    )
}
export default Phrases