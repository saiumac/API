// useContext -- it is used to pass the parent data to childs and grandchilds.
// createContext() -- first we have to create context hook using createContext().
// <context.Provider value={parent data}>here we call the child functions</context.Provider>

/////////////////////////////// HOOks //////////////////////
    // 1-- useState() -- which is used to render the elements dynamically and update the elements dynamically.
    // 2-- useEffect() -- it is 3 types 
    // i) there is no dependency -- in this the useEffect is rendered when the component is updated.
    //ii) there is an empty array -- in this the useEffect is rendered only once when the component is rendered.
    // iii) there is an array contain some value -- in this the useEffect is rendered when the value in that array is updated.
    // 3-- useRef() -- it is used when we have to get the elements. It contain ref={}.
    // 4-- useContext() -- which is used to send the data from parent to childs and grandchilds.
    // 5-- useMemo() -- which is used to memorise the repeated values and give that values without execution.
    // 6-- useNavigate() -- which is used to navigate to another page depending on response.


import { createContext } from "react";
import Home from "./18.1_home"
import "./index.css"
export let context = createContext();

function Context(){
    let data = {
            Name : "Hemanth",
            Age : 21,
            Place : "Vijayawada",
            Array : [1,2,3,4,5]
        }
    return (
        <context.Provider value={data}>
            <Home></Home>
        </context.Provider>
    )
}

// export function Ref(){
//     let ele = useRef([]);
//     let arr = new Array(10).fill();

//     return (
//         <>
//         {
//        arr.map((val,i)=>{
//         return(
//             <h1 ref={(el)=>{ele.current[i]=el}} className="h1-1">This is heading {i+1}</h1>
//         )
//        })
//     }
//        </>
//     )
// }

export default Context;
