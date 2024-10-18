import { useState } from "react";

export function Counter(){

    let divStyle = {
        display : "flex",
        justifyContent : "center",
        marginTop : "100px",
        fontFamily:"system-ui"
    }

    let [count, UpdateCount] = useState(0)
    return (
        <div>
        <center><h1 style={{fontFamily:"system-ui"}}>Counter</h1></center>
        <div style={divStyle}>
            <button style={{color:"black",backgroundColor:"red",padding:"20px",fontSize:"30px"}} onClick={()=>{
                if(count<=0){
                    count = 0
                }
                else{
                    UpdateCount(--count)
                }
            }}>-</button>
            <p style={{margin:"20px",fontSize:"50px"}}>{count}</p>
            <button style={{color:"black",backgroundColor:"green",padding:"20px",fontSize:"30px"}} onClick={()=>{
                if(count>=10){
                    count = 10
                }
                else{
                    UpdateCount(++count)
                }
            }}>+</button>
        </div>
        </div>
    )
}

