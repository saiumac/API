// use Effect() -- useEffect(callback, [dependencies(optional)])
// it is displayed after the component is rendered.
// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// We have to call the API with useEffect() hook only.


import { useEffect, useState } from "react";

function Ren(){
    let [timer, SetTimer] = useState(0)
useEffect(()=>{
console.log("USE EFFECT")
})
    return(
        <>
        <h1>Timer : {timer}</h1>
        <button onClick={()=>{
            SetTimer(timer + 1,console.log("return"))
        }}>Update</button>
        </>
    )
}

// function Ren(){
//     let [timer, SetTimer] = useState(0)
// useEffect(()=>{
// console.log("USE EFFECT")
// },[])
//     return(
//         <>
//         <h1>Timer : {timer}</h1>
//         <button onClick={()=>{
//             SetTimer(timer + 1,console.log("return"))
//         }}>Update</button>
//         </>
//     )
// }



// function Ren(){
//     let [timer,setTimer] = useState(0);
//     let [counter,updateCounter] = useState(0);

//     useEffect(()=>{
//         console.log("Inside useffect")
//     },[counter])

// return(
//     <>
//     <h1>Timer : {timer} {console.log("Inside component")}</h1>
//     <button onClick={()=>{
//         setTimer(timer + 1)
//     }}>Update Timer</button>

//         <button onClick={()=>{
//         updateCounter(counter + 1)
//     }}>Update Counter</button>
//     </>
// )
// }

export default Ren;