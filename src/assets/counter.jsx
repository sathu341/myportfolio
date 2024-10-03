import { memo } from "react"

function Counter({increment}){
    function show(){
        console.log("show")
        return "Show"
    }
    const sh=show()
    return(
        <>
        <button onClick={()=>{
            increment()
        }}>Increment</button>
        <h2 style={{color:'white'}}>{sh}</h2>
        </>
    )
}
export default memo(Counter);