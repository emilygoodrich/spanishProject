import React, {useState, useEffect} from 'react'
import british from '../pics/british_flag.png'
import spanish from '../pics/spanish_flag.png'
const LanguageToggle = () => {
    const [lan, setLan] = useState(() => {
        const rawValue = localStorage.getItem('lan');
        const initialValue = JSON.parse(rawValue);
        return initialValue || 'eng';
    })
    const [img, setImg] = useState(() => {
        const rawValue = localStorage.getItem('img');
        const initialValue = JSON.parse(rawValue);
        return initialValue || british
    })
    const toggle = () => {
        if (lan === "eng") {
            setLan('es')
            setImg(spanish)
            console.log(`the language is: ${lan}`)
        } else if (lan === "es") {
            setLan('eng')
            setImg(british)
            console.log(`the language is: ${lan}`)
        } else {
            console.log('its not either rn i think')
        }
    }
    useEffect(() => {
        localStorage.setItem('lan', JSON.stringify(lan));
    }, [lan])
    useEffect(() => {
        localStorage.setItem('img', JSON.stringify(img));
    }, [img])
    return (
        <div>
            <div onClick={toggle}>
                <img id="toggleImg" src={img} alt="flag icon for language" />
            </div>
        </div>
    )
}
export default LanguageToggle