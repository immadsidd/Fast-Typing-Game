import React from "react"
import "./App.css"
import useWordGame from "./hooks/useWordGame"

function App() {
  const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount,
        remarks
    } = useWordGame(15)

    return (
        <div>
            <h1 className={isTimeRunning? "none": "block"} >How fast do you type?</h1><br/>
            <h4>{isTimeRunning? "Type the Paragraph": "Instruction"}</h4>
            <p className={isTimeRunning? "none": "block"} >Test your typing speed by writing the given paragraph in 15 secs. Goodluck!</p>
            <p className={isTimeRunning? "block": "none"} >"look at the screen and use all your fingers to hit the keys. Keep practicing and you will gradually pick up the pace. You will see the results after just few weeks!"</p>
            <br/><textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
             /><br/><br/>
            <h4 className={isTimeRunning? "block": "none"} >Time reminaing: {timeRemaining}</h4>
            <br/><button onClick={startGame} disabled={isTimeRunning}>Start</button><br/>
            <h1 className={isTimeRunning? "none": "block"} >Word count: {wordCount}</h1><br/>
            <h4 className={isTimeRunning? "none": "block"} >Remarks <br/><br/>{remarks}</h4>
        </div>
    )
}

export default App