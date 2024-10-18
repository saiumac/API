// import { useState } from "react";

// function Search(p){

// const [newTask, updateNewTask] = useState("")
//     return (
// <>
//         <input type="text" value={newTask} onChange={(e)=>{updateNewTask(e.target.value)}} id="inp"/>
//         <button onClick={()=>
//             {p.add(newTask); updateNewTask("")}}>Add todo</button>
// </>
//     )
// }

// export default Search;

import { useState } from "react";

function Search(p){
    let [newTask, UpdateNewTask] = useState("");
    return(
        <>
        <input type="text" value={newTask} onChange={(e)=>{UpdateNewTask(e.target.value)}} />
        <button onClick={()=>{
                p.addd(newTask);
                UpdateNewTask("")
        }} > Add Todo</button>
        </>
    )
}
export default Search;