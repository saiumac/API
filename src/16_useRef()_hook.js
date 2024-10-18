// useRef() -- it is used to get the elements and add the functioning. It returns the object and the property is current. It doesn't rerender.
// ref={} -- this is used in elements to refer the useRef variab le.
// variable.current -- return the current variable.
// fill() -- which fills the array.


import { useEffect, useRef, useState } from "react";
import "./index.css";
import useFetchApi from "./17_api_fetching";

// function UseRef(){
//    let h1ele = useRef([]);
//    let arr = new Array(10).fill();

//    function changeStyle(e){
//         for(let valu of h1ele.current){
//             valu.classList.remove("primary")
//         }
//         e.target.classList.add("primary")
//     }
   
//    return(
//     <>
//     {
//         arr.map((val,i)=>{
//             return(
//                 <h1 key={i} ref={(el)=>{h1ele.current[i]=el}} onMouseOver={(ev)=>{
//                     changeStyle(ev)
//                 }}>This is heading {i+1}</h1>
//             )
//         })
//     }
//     </>
//    )
// }
// function UseRef(){
//     let ele = useRef();
//     let x = useRef(1);
//     let [y,setY] = useState();

//     return(
//         <>
//         <h1 ref={ele} className="active">This is h1 tag</h1>
//         <button onClick={()=>{
//             console.log(ele)
//                console.dir( ele.current)
//                ele.current.classList.toggle("active");
//                ele.current.classList.toggle("inactive");
//         }}>Click</button>

//         <p>{x.current}</p>
//         <button onClick={()=>{
//            x.current += 1;
//            setY(x.current)
//         }}>Click</button>
//         </>
//     )
// }

function UseRef(){
   
let product = useFetchApi("https://fakestoreapi.com/products")
if(product.length === 0){
    return("Fetching Data...")
}
else {
    return (
        product.map((val)=>{
            return(
    <>
    <h1>ID : {val.id} </h1>
    <h1>{val.title}</h1>
    </>
            )
        })
    )
}
}

export default UseRef;