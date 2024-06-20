import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../Styled/button"
import Rules from "./Rules"


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(5);
  const [error, setError] = useState("")
  const [ShowRules, setRules] = useState(false);

  
  const gernerateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const roleDice = () => {
    if(!selectedNumber){
     setError("Please Select the Number First");  
    return;
    }
    
    const randomNumber = gernerateRandomNumber (1, 7);

    setCurrentDice ((prev) => randomNumber);


    if(selectedNumber === randomNumber){
      setScore(prev => prev + randomNumber);
    }else {
      setScore(prev=> prev - 2);
    }

    setSelectedNumber(undefined);

};

const resetScore= () => {
  setScore(0);
}



  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError}
        selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="bttns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setRules((prev) => !prev) }>
        {ShowRules ? "Hide" : "Show"}
        Rule</Button>
      </div>
      {ShowRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay 

const MainContainer = styled.main`
padding-top: 70px;

   .top-section{
      display: flex;
      justify-content: space-around;
      align-items: end;
   }
   .bttns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
    margin-top: 40px;
   }
`