import { useState } from "react"

export default function Team(){
    const [team, setItem] = useState(11)

    const handleAdd = ()=>{
      const newTeam = team + 1;
      setItem(newTeam);
    }
    const handleRemove = () => {
        setItem(team - 1)
    }
    const teamStyle = {
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius: '15px'
    }
    return (
       
    
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>remove plsyer</button>
        </div>
    )
}