
// let h1_1 = {
//     background:'greenyellow',
//     color : 'red'
// }

// export let Para = ()=>{
//     return (<center><div className="container">
//     <h1 className="h1_1" style={h1_1}>Yaka Hemanth</h1>
//     <h3 className="h3_1" style={{color:"red"}}>Developer</h3>
//     <p id="para_1" >I have done many projects.</p>
//     </div></center>)
// }

// export let students = {
//     name : ["Hemanth","Harini","Imran","Pedha Babu","Bhavani"],
//     stdId : [532,570,529,504,517],
//     course : ["MSCS","MSCS","MSCS","MSCS","MSCS"]
// }

// export let lecturers = {
//     name : ["EMK","Chakravarthi","Siva","Kaveri"],
//     subject : ["statistics","statistics","statistics","statistics"]
// }

 

// export function Heading(){
//     return (<>
//     <div>
//         <button>Home</button>
//         <button>About</button>
//         <button>Contact</button>
//         <button>Projects</button>
//     </div>
//     </>)
// }

// class Hemanth extends React.Component {
//     render(){
//         return (<>
//        <ol>
//         <li>Apple</li>
//         <li>Banana</li>
//         <li>Orange</li>
//         <li>Jackfruit</li>
//        </ol>
//         </>)
//     }
// }

// export default Hemanth;

import {Names} from "./4_props";

export function Names1(){
    let obj=
    {
        id:3,
        name:"sidhu"
    }

  
return(
    <>
    <Names {...obj} />
    <input type="color" onChange={(e)=>{
 document.body.style.backgroundColor = e.target.value
    }}/>
   
    </>
)
}






