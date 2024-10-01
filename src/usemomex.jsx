import { useState } from "react";
function Usememoex(){
    const [number,setNumber]=useState(0);
    const[count,setCount]=useState(0)
    const incCount=()=>{
        console.log("INC Count")
        setCount(count+1)
    }
    const changeValue=(e)=>{
        setNumber(e.target.value)
    }

   const sqaureResult=squareNumber(number)

    function squareNumber(number){
        console.log("square");
        return Math.pow(Number(number),2)
    }
    return(
        <>
        <input type="text" onChange={changeValue} />
          <div style={{backgroundColor:'white'}}>
            {sqaureResult}
          </div>
        <button onClick={incCount}>INC Count</button>
        <div style={{backgroundColor:'white'}}>
            {count}
        </div>
        </>
    )
}
export default Usememoex;