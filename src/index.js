// npx create-react-app ourprojectname  -- this is a command which creates the react app. 
// npx -- node package executer.
// cd ourprojectname -- which creates the directory.
// npm start -- which starts the app.
//  npm -- node package manager.
// React is used to install the react from react. ("react")
// ReactDOM is used to get elements which are in another files.  ("react-dom/client")
// createRoot is used to create root to the get element.
// root.render() is used to render the elements.
// node_modules -- it contains n no.of libraries.
// public -- we can't change anything in this folder. It contains one html file only.
// src -- we can write the code in this folder only. We can create css file in this folder.
// className -- we can write class as className in react.
// reportWebVitals.js -- which is used to measure the performance of the application.
// setupTests.js -- which is used for the testing.
// .gitignore -- if we can push our code into git or github or gitlab, before pushing the code we have to mention that which part of the code have to push and which have to ignore. We have to mention the code which we don't have push that code into version control.
// package.json -- which contains the minimum versions and commands.
// package-lock.json -- which we can lock the present using version.

      // import React from "react"
      // import ReactDOM from "react-dom/client"
      // let root = ReactDOM.createRoot(document.getElementById("root"))
      // let li_1 = React.createElement("li",{},"Home")
      // let li_2 = React.createElement("li",{},"About")
      // let li_3 = React.createElement("li",{},"Contact")
      // let ul = React.createElement("ul",{},[li_1,li_2,li_3])
      // root.render(ul)

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Att, {students as s, lecturers as l, Heading, Para, F2} from "./demo"
// import { ulist, Oenu, Menu } from "./1_jsx";
// import {Calling, Names, NamesC, Nothing, Des} from "./2_components"
// import { Names1} from "./5_map"
// import {Even} from "./6_event_handling";
// import {Display} from "./7_state";
// import {BackgroundChange} from "./8_background_task"
// import {Counter} from "./9_counter_task"
// import {Names1} from "./demo"
// import {Item} from "./10_oneway&2way_dataBinding"
// import Cond from "./11_conditional_rendering"
// import Ren from "./12_useEffect_hooks";
// import API from "./13_useEffect_API";
// import Routing from "./15_routing";
// import UseRef from "./16_useRef()_hook";
// import Context,{Ref} from "./18_useContext";
// import Memo from "./19_useMemo()";
// import Parent from "./20_passing_data";

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
      <App/>
</React.StrictMode>
)
// root.render(<Parent/>)
// root.render(<Memo/>)
// root.render(<Ref/>)
// root.render(<Context/>)
// root.render(<UseRef/>)
// root.render(<Routing></Routing>)
// root.render(<API/>)
// root.render(<Ren/>)
// root.render(<Cond/>)
// root.render(<Item/>)
// root.render(<Counter/>)
// root.render(<BackgroundChange/>)
// root.render(<Display/>)
// root.render(<Names1/>)
// root.render(<Even/>)
// root.render(console.log(s.name[0] = "Madhuri",l))
// root.render(console.log(s.name,l))
// root.render(<Heading/>)
// root.render(<Att/>)
// root.render(ulist)
// root.render(<Oenu/>)
// root.render(<Menu/>)
// root.render(<Names/>)
// root.render(<NamesC/>)
// root.render(<Calling/>)
// root.render(<Nothing/>)
// root.render(<Des/>)
// root.render(<Para/>)
// root.render(<F2/>)

// let Re = function(){
//       return "This is a IIFE"
// }
// root.render(<Re/>)
// root.render(<Pro>
//       <button style={{backgroundColor:"red",border:"1px solid red",margin:"10px"}}>Like</button> 
//       <button style={{backgroundColor:"green"}}>Share</button> 
//       <button>Subscribe</button> 
//       </Pro>)











