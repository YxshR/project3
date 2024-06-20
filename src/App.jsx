import { useState } from "react"
import StartGame from "./components/StartGame"




function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
   
  const toggleGamePlay =() =>{

    setIsGameStarted((prev) =>!prev);
  };
  return (
    <>
    {

      isGameStarted? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
    }
     
    </>
  )
}

export default App
