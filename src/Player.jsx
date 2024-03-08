import { useState } from "react"

export default function PlayerCount () {
    const teamStyle = {
        border : "3px Solid green",
        borderRadius : "10px",
        padding : "10px",
        margin : "20px",
    }
    
    const [playerCalc , playerFunction] = useState(11);
    const playerAdd = () => {
        const playerAdd = playerCalc + 1;
        playerFunction(playerAdd);
    }
    const playerReduce = () => {
        const playerRemove = playerCalc -1;
        playerFunction(playerRemove);
    }
    return (
        <div style={teamStyle}>
            Player : {playerCalc}
            <br />
            <button onClick={playerAdd}>Add Player</button> 
            <button onClick={playerReduce}>Remove Player</button> 
        </div>
    )
}