import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usecallbackex from './usecallbackex'
// import Aboutme from './aboutme'
// import Education from './education'
// import MyWork from './mywork'

function App() {
//  const [count,setCount]=useState(0)
//  const [number,setNumber]=useState(0)
//  useEffect(()=>{
//   console.log("count increament....")
//  },[count])
//  useEffect(()=>{
//   console.log("useEffect...Number.......")
//  },[number])

  return (
    <>
     {/* <div className='main'>
            <div className="nav">
              <div>
                <a href="/">Home</a>
              </div>
              <div>
                <a href="#aboutme">About Me</a>
              </div>
              <div>
                <a href="#education">Education</a>
              </div>
            </div>
            <section className='section'>
              <div className="leftside">
                <a href="#mywork">
                <span style={{color:'white'}}>My Work</span>
             
                  </a>
                  <button onClick={()=>{
                    setCount(count+1)
                  }}>increment count</button>
                  {count}
              </div>
              <div className="rightside">
                <a href="#aboutme" style={{textDecoration:'none',color:'white'}}>
                  info
                </a>
               <button onClick={()=>{
                setNumber(number+1)
               }}>INC number</button>
               {number}
              </div>
            </section>
            <section className='section' id="aboutme">
              <div>
              <Aboutme/>
              </div>
          
            </section>
            <section className='section' id="education">
              <div>
              <Education/>
              </div>
          
            </section>
            <section className='section' id="mywork">
              <div>
               <MyWork/>
              </div>
          
            </section>
          
     </div> */}
     <Usecallbackex/>
    
    </>
  )
}

export default App
