import React from "react";
export function Even(){
    function disMsg(n,e){
        alert(`Button Clicked : ${n}`)
        console.dir(e.target)
    }
    return (
        <button onClick={(e)=>{disMsg(45,e)}}>Click</button>
    )
}