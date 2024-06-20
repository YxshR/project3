import styled from "styled-components";


const RollDice = ({currentDice, roleDice}) => {
    


    

  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
        <img src= {`/images/Dice/dice_${currentDice}.png`} alt="dice" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 24px;

    }
    .dice{
        cursor: pointer;

    }
`