import { useState,useCallback } from "react"
import Counter from "./assets/counter"
function Usecallbackex(){
    const [count,setCount]=useState(0)
    const countInc=()=>{
        setCount(prevCount=>prevCount+1)
    }
    const incCount=useCallback(()=>{
        countInc()
    },[])
    return(
        <>
        <h1 style={{color:'white'}}>Count:{count}</h1>
        <Counter increment={incCount}/>
        <br/>
        <button onClick={()=>{
            setCount(count-1)
        }}>Decrement</button>
        </>
    )
}

export default Usecallbackex