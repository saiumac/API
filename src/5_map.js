// fill() -- which fills the array.


import React from "react";
// import {Hema} from "./4_props";

// export let F2 = ()=>{
//     let users = [
//         {
//             ID : 1,
//             Name : "HEMANTH",
//             Age : 21,
//             Place : "VIJAYAWADA"
//         },
//         {
//             ID : 2,
//             Name : "HARINI",
//             Age : 19,
//             Place : "VIJAYAWADA"
//         },
//         {
//             ID : 3,
//             Name : "BHAVANI",
//             Age : 22,
//             Place : "VIJAYAWADA"
//         }
//     ]

//     return (
//         <>
//         {
// users.map((u)=>{
//     return (
//     <Hema key={u.ID} id={u.ID} name={u.Name} age={u.Age} place={u.Place}/>
//     )
// })
//  }
//   </> 
//     )
// }

// export function Pro(p){
//   return (
//     <>   
//     <div>
//         <h1>This is h1</h1>
//         <p>This is paragraph</p>
//         {p.children}
//     </div>
//     </>

    
//   )
// }

import {Names} from "./4_props"
export function Names1(){
 let Obj = [{
  Id : 1,
  Name : "Hemanth",
  Age : 21
 },
 {
  Id : 2,
  Name : "Harini",
  Age : 19
 }
]

  return(
    Obj.map((o)=>{
     return <Names key={o.Id} id={o.Id} name={o.Name} age={o.Age}>This is info of my students</Names>
    })
  )
}