// Data binding -- we can store data in one file and displyed that data in another file, if we change the data in stored file then automatically the data in displayed file also change is called data binding.


// 1-way(we use state concepts) -- suppose if we change the data in js then the data in DOM/HTML also changed.
//       -- suppose if we change the data in DOM/HTML then the data in js also changed.(for inputs)

// 2-way -- if we change data in js then the data in DOM/HTML also changed and the output value will send to the js.

// Reconsillation -- which compares the first dom and changed dom, if there are any changes in that dom's then only changed part will be rendered. In react Diffi algorithm is using.
import { useState } from "react";

// export function Prac(){
//     let [val,updateVal] = useState(100);
//     return (
//         <>
//         <h1>{val}</h1>
//         <input type="text" id="num" value={val} onChange={(e)=>{
//             let UVal = e.target.value;
//             updateVal(UVal)
//         }}/>
//         <button onClick={()=>{
//             updateVal(200)
//         }}>Click</button>
//         </>
//     )
// }

// export function Item(){
//     let [count,setCount] = useState(0)

//     return (
//         <>
//         <h1>Count : {count}</h1>
//         <button onClick={()=>{setCount(count + 1);console.log(count + 1)}}>Click</button>
//         </>
//     )
// }

// export function Item(){
//     let [count,updateItems] = useState(0)
//        let items = [1,2,3,4,5,6,7,8,9]
//        function incre(){
//         updateItems(count + 1)
//        }
//     return (
//         <div>
//         <h1>Count : {count}</h1>
//         <button onClick={incre}>Increment</button>
//         <ul>
//             {
//                 items.map((val,ind)=>{
//                     return (

//                         <li>Item {val}</li>
//                     )
//                 })
//             }
//         </ul>
//         </div>
//     )
// }

export function Item(){
    let [card,updateCount] = useState("")

    function addCards(){
        return (
        <div style={{width:"300px",height:"300px",border:"2px solid red"}}>
        <h3>Yaka Hemanth</h3>
        <h3>React Developer</h3>
  </div>
        )
    }
    return (
        <div>
            <button onClick={()=>{
                updateCount(addCards())
            }}>Add Cards</button>

            <h1>{card}</h1>

        </div>
    )
}