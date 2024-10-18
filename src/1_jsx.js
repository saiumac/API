////////////////////// JSX --  /////////////////////
// JSX -- it is a syntax extension of javascript.
// By using babel library the JSX converts into Javascript.
// We will put the variables in flower braces {} in tags.
// Functional Component -- the code which we have written inside the function.
// {} -- we can write javascript inside the curly braces.

import React from "react"
// import ReactDOM from "react-dom/client"
let li_4 = React.createElement("li",null,"This is last list tag")
export let ulist = 
  <ul>
    {/* {alert("This is a list")} */}
    <li className="li-1">Home</li>
    <li id="abo">About</li>
    <li>Contact</li>
    <li>Logout</li>
    <li>{li_4}</li>
  </ul>


export function Oenu(){
  let menus = ['hemanth','harini','imran']
  return (<ul>
    <li>{menus[0]}</li>
    <li>{menus[1]}</li>
    <li>{menus[2]}</li>
  </ul>
)}

export function Menu(){
  return (<h1><ol>
    <li>HOME</li>
    <li>ABOUT</li>
    <li>CONTACT</li>
    <li>LOGOUT</li>
    </ol></h1>)
}
