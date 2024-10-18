// import { useRef, useState } from "react";
import "./index.css"

import { useState } from "react";

// function Form(){
// let [email, setEmail] = useState("");
// let [password, setPassword] = useState("");
// // let password = useRef("")

// let [errors, setErrors] = useState({
//     email : "",
//     password : ""
// })

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function handleSubmit(){
//     if(email.trim()=== ""){
//         setErrors((errors)=>({...errors,email:"Enter email address"}))
//     }
//     else if(!emailRegex.test(email)){
//         setErrors((errors)=>({...errors,email:"Enter valid email address"}))
//     }
//     else {
//         setErrors((errors)=>({...errors,email:""}))
//         // setEmail("")
//     }

//     if(password.trim()===""){
//         setErrors((errors)=>({...errors,password:"Enter password"}))
//     }
//     else if(password.trim().length<8){
//             setErrors((errors)=>({...errors,password:"password must contain 9 characters"}))
//     }
//     else {
//         setErrors((errors)=>({...errors,password:""}))
//         // setPassword("")
//     }
// }
// return (
//     <div className="border w-25 m-auto mt-5 p-4 ">
//             <h2 className="text-primary text-center">Login Form</h2>
//         <div className="mt-3">
// <input type="email" placeholder="Email" value={email} className="w-100 form-control" onChange={(e)=>{setEmail(e.target.value)}} />
// <span className="text-danger">{errors.email}</span>
//         </div>
//         <div className="mt-4"> 
//             <input type="password" placeholder="password" value={password} className="w-100 form-control" onChange={(e)=>{setPassword(e.target.value)}} />
//             <span className="text-danger">{errors.password}</span>
//         </div>
//         {/* <div className="mt-4"> 
//             <input type="password" placeholder="password" ref={password}  className="w-100 form-control" />
//         </div> */}
//         <div>
//             <button className="btn btn-primary w-100 mt-3" onClick={()=>{handleSubmit()} }>Login</button>
//         </div>
//     </div>
// )

// }

function Form(){
    let [firstname,setFirstName] = useState("");
    let [lastname,setLastName] = useState("");
    let [phn,setPhn] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [cpassword,setcPassword] = useState("");
    let [errors,setErrors] = useState({
        firstname : "",
        lastname : "",
        phn : "",
        email : "",
        password : "",
        cpassword : ""
    })
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const phoneRegex = /^\+?[1-9]\d{1,14}$/;


    function handleRegister(){
// first name check
if(firstname.trim()=== ""){
    setErrors((errors)=>({...errors,firstname:"First name is mandatory"}))
}
else {
    setErrors((errors)=>({...errors,firstname:""}))
}
//last name check
if(lastname.trim()===""){
    setErrors((errors)=>({...errors,lastname:"Last name is mandatory"}))
}
else {
    setErrors((errors)=>({...errors,lastname:""}))
}
// email check
if(email.trim()===""){
    setErrors((errors)=>({...errors,email:"Email is mandatory"}))
}
else if(!emailRegex.test(email)){
    setErrors((errors)=> ({...errors,email:"Enter valid email"}))
}
else {
    setErrors((errors)=>({...errors,email:""}))
}
// mobile number check
if(phn.trim()===""){
    setErrors((errors)=> ({...errors,phn:"Mobile number is mandatory"}))
}
else if(!phoneRegex.test(phn)){
    setErrors((errors)=> ({...errors,phn:"Enter valid mobile number"}))
}
else {
    setErrors((errors)=>({...errors,phn:""}))
}
// password check
if(password.trim()===""){
    setErrors((errors)=>({...errors,password:"Password is mandatory"}))
}
else if(password.length<8){
    setErrors((errors)=>({...errors,password:"Password minimum 9 characters"}))
}
else {
    setErrors((errors)=>({...errors,password:""}))
}
// confirm password check
if(cpassword.trim()===""){
    setErrors((errors)=>({...errors,cpassword:"Confirm password cannot be empty"}))
}
else if(cpassword!==password){
    setErrors((errors)=>({...errors,cpassword:"Password does not match"}))
}
else {
    setErrors((errors)=>({...errors,cpassword:""}))
}
    }
    return (
        <>
        <div className="border p-4 mainContainer">
            <h2 className="text-center">Register Form</h2>
         {/* <form className="mt-3"> */}
            <div>
            <input type="text" className="form-control" placeholder="First Name" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}}/>
            <span className="text-danger">{errors.firstname}</span>
            </div>
            <div className="mt-4">
            <input type="text" className="form-control" placeholder="Last Name" value={lastname} onChange={(e)=>{setLastName(e.target.value)}}/>
            <span className="text-danger">{errors.lastname}</span>
            </div>
            <div className="mt-4">
            <input type="text" className="form-control" placeholder="Mobile Number" value={phn} onChange={(e)=>{setPhn(e.target.value)}}/>
            <span className="text-danger">{errors.phn}</span>
            </div>
            <div className="mt-4">
            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <span className="text-danger">{errors.email}</span>
            </div>
            <div className="mt-4">
            <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <span className="text-danger">{errors.password}</span>
            </div>
            <div className="mt-4">
            <input type="text" className="form-control" placeholder="Confirm Password" value={cpassword} onChange={(e)=>{setcPassword(e.target.value)}}/>
            <span className="text-danger">{errors.cpassword}</span>
            </div>
            <div className="mt-4">
                <button className="btn btn-primary w-100" onClick={()=>{handleRegister()}}>Register</button>
            </div>

         {/* </form> */}

        </div>
        </>
    )
}

export default Form;