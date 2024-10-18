import { useEffect, useState } from "react";
import Search from "./20.1_search";
import "./index.css"

function Parent(){
    let [timer, updateTimer] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        setInterval(()=>{
            updateTimer(new Date().toLocaleTimeString())
        },1000)
    },[])
    let [list, updateList] = useState(["Task1","Task2"]);

 const addNew = (task)=>{
       updateList([...list, task])
    }
    return(
        <>
        <h1 className="text-primary">{timer}</h1>
        <Search addd={addNew}></Search>
        <ul>
            {
                list.map((l)=>{
                    return <li>{l}</li>
                })
            }
        </ul>
            </>
    )
}

export default Parent;