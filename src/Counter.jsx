import { useState } from "react";

export default function Counter() {
    const countStyle = {
        border : "3px Solid Red",
        borderRadius : "10px",
        padding : "10px",
    }
    const [count,setCount] = useState(0);
    const add =()=> {
      const newCount = count + 1;
      setCount(newCount)
    }
    const reduce = ()=> {
        const reduce = count-1;
        setCount(reduce);
    }
    return (
        <div style={countStyle}>
            Count : {count}
            <br /><button onClick={add}>Add</button> <button onClick={reduce}>Reduce</button>
        </div>
    )
}

