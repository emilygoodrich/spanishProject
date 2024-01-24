import React from 'react';
import spanishWords from './spanishWords.json'
function ReadingJSON() {
    return(
        <div>
            {spanishWords.map((word) => (
        <div className="wordLine">
          <p>{word.spanish}</p>
          <p>---</p>
          <p>{word.english}</p>
        </div>
      ))}
        </div>
    )
}
export default ReadingJSON