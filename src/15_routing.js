import Home from "./1_home";
import About from "./1_about";
import Contact from "./1_contact";
import Projects from "./1_projects";
import User, { Order, Profile } from "./1_user";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
function Heading(){
    return (
        <ul style={{display:"flex",justifyContent:"space-around",listStyle:"none",backgroundColor:"orange",padding:"20px",border:"2px solid #000",fontSize:"20px",fontFamily:"system-ui"}}>
            <li><Link to="/" style={{textDecoration:"none",color:"#fff"}} >Home</Link></li>
            <li><Link to="/about/" style={{textDecoration:"none",color:"#fff"}} >About</Link> </li>
            <li><Link to="/contact" style={{textDecoration:"none",color:"#fff"}} >Contact</Link> </li>
            <li><Link to="/projects" style={{textDecoration:"none",color:"#fff"}}  >Projects</Link> </li>
            <li><Link to="/user" style={{textDecoration:"none",color:"#fff"}}  >User</Link> </li>
        </ul>
    )
}

function Error(){
    return (
        <h1>Oops page Not Found...</h1>
    )
}
function Routing(){
    return (
        <>
     <BrowserRouter>
      <Heading></Heading>  
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about/:id/:name" element={<About/>} />
        <Route path="/contact/:id/:name" element={<Contact/>} />
        <Route path="/projects/:id/:name" element={<Projects/>} />
        <Route path="/user" element={<User/>}>
            <Route path="order/:id/:name" element={<Order/>}/>
            <Route path="profile/:id/:name" element={<Profile/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
     </Routes>
     </BrowserRouter>
     </>
    )
}

export default Routing;