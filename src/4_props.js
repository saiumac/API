// ////////////////////////     PROPS       ///////////////////////
// The transferring data from parent to child is called props.
// These are immutable.
// {...variable name} -- spread operator.


// import React from "react";

// export let Hema = (props)=>{
//     return (<div style={{border:"2px solid red",margin:"20px",padding:"20px"}}>
//     <h1>ID : {props.id}</h1>
//     <h1>Name : {props.name}</h1>
//     <h2>Age : {props.age}</h2>
//     <h2>Place : {props.place}</h2>
//     </div>)
// }


// export class Hema extends React.Component {
// render(){
//     return (
//         <div style={{width:"300px",border:"5px solid greenyellow",margin:"20px",padding:"20px"}}>
        
//                <h1>ID : {this.props.id}</h1>
//                <h1>Name : {this.props.name}</h1>
//                <h1>Age : {this.props.age}</h1>
//                <h2>Place : {this.props.place}</h2>
//      </div>)
// }
// }

export function Names({id,name}){
return(
    <>
    <h1>ID : {id}</h1>
    <h1>Name : {name}</h1>
    </>
)
}