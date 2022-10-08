import React from "react"

function useWordGame(startingtime=5){

  const [text, setText] = React.useState("")
  const [timeRemaining, setTimeRemaining] = React.useState(startingtime)
  const [isTimeRunning, setIsTimeRunning] = React.useState(false)
  const [wordCount, setWordCount] = React.useState(0)
  const [remarks,setRemarks]= React.useState("")
  const textBoxRef = React.useRef(null)
    
  function handleChange(e) {
      const {value} = e.target
      setText(value)
  }
  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(startingtime)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
}

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calword(text)) 
    isremarks()
}
  function isremarks(){
    
     if( wordCount <= 10){
        setRemarks("You are a Slow Typer")
     }else if( wordCount > 10 && wordCount <= 15){
        setRemarks("You are Good Typer")
     }else if ( wordCount >15){
        setRemarks("You are Fast Typer")
     }
  }
   
  function calword(text) {
    const words = text.trim().split(" ")
    return words.filter(word => word !== "").length 
    
   
}
 React.useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    return {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount, remarks}

} 

export default useWordGame