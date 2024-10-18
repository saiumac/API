// state -- it is used in class component, when we have to update the values dynamically and re-rendering we use state. {} .. setState()
//useState -- it is used in function component, when we have to update the values dynamically  and re-rendering we use useState. It will return the values in an array [values,set].
// JSON.stringify(variable name) -- which converts json object into string.
import React,{useState} from "react";

// export function Counter(){
//     let [count,UC] = useState(0);
//     return(
//         <>
//         <h1>Clicked : {count}</h1>
//         <button onClick={()=>{UC(count += 1);console.log(count)}}>Click</button>
//         </>
//     )
// }


// export class Counter extends React.Component {
//     state = {
//         count : 0
//     }
//     render(){
//         return (
//             <>
//             <h1>Clicked : {this.state.count}</h1>
//             <button onClick={()=>{
//                 this.setState({count : this.state.count + 1})
//             }}>Click</button>
//             </>
//         )
//     }
// }

// export class Mobile extends React.Component {
//     state = {
//         product : "Vivo X60",
//         price : 40000
//     }
//     render(){
//         return (
//             <>
//             <h1>Product Name : {this.state.product}</h1>
//             <h1>Product Price : {this.state.price}</h1>
//             <input id="price" type="number"/>
//             <button onClick={()=>{
//                 let p = document.getElementById("price").value;
//                 this.setState({price : p},()=>{console.log(this.state)})
//                 }}>Update</button>
//             </>
//         )
//     }
// }


// export class Mobile extends React.Component {
//     state = {
//         Product : "VIVO X60",
//         Price : 40000
//     }

//     constructor(){
//         super();
//         this.UpdatePrice = this.UpdatePrice.bind(this)
//     }

//     render(){
//         return (
//             <>
//             <h1>Product Name : {this.state.Product}</h1>
//             <h2>Price : {this.state.Price}</h2>
//             <input type="text" id="price"/>
//             <button onClick={this.UpdatePrice}>Update</button>
//             </>
//         )
//     }

//    UpdatePrice(){
//         let p = document.getElementById("price").value;
//         this.setState({
//             Price:p
//         }, ()=>{console.log(this.state)})
//     }
// }

// export class Mobile extends React.Component {
//     state = {
//         name : "Harini",
//         age : 19
//     }
//     render(){
//         return (
//             <>
//             <h1>Name : {this.state.name}</h1>
//             <h1>Age : {this.state.age}</h1>
//             <input id="name" type="text"/> 
//             <input id="age" type="number"/>
//             <button onClick={()=>{
//                 let nameObj = document.getElementById("name").value;
//                 let ageObj = document.getElementById("age").value;

//              this.setState({
//                 name:nameObj
//              },(console.log(this.state)))
//             }}>Update</button>
//             </>
//         )
//     }
// }


// const AgeCalculator = () => {
//     const [birthDate, setBirthDate] = useState('');
//     const [age, setAge] = useState(null);

//     const calculateAge = () => {
//         if (!birthDate) return;

//         const birthDateObj = new Date(birthDate);
//         const today = new Date();

//         let calculatedAge = today.getFullYear() - birthDateObj.getFullYear();
//         const monthDiff = today.getMonth() - birthDateObj.getMonth();

//         if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
//             calculatedAge--;
//         }

//         setAge(calculatedAge);
//     };

//     return (
//         <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             <h1>Age Calculator</h1>
//             <input
//                 type="date"
//                 value={birthDate}
//                 onChange={(e) => setBirthDate(e.target.value)}
//             />
//             <br /> <br/>
//             <button onClick={calculateAge}>Calculate Age</button>
//             {age !== null && (
//                <div>
//                     <h2>Your Age: {age}</h2>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AgeCalculator;


export function Display(){
    
    // let [productName,UpdateName] = useState("Vivo X60")
    // let [price,UpdatePrice] = useState(40000)
    
    let [product,Update] = useState({
        productName : "Vivo X60",
        price : 40000
    })

    return (
        <>
        <h1>Name : {product.productName}</h1>
        <h2>Price : {product.price}</h2>
        {/* <h3>Object : {JSON.stringify(product)}</h3> */}
        <form>
        <input type="text" id="name" placeholder="Product Name" autoComplete="off" required/>
        <input type="number" id="price" placeholder="Product Price" autoComplete="off" required/>
        <button onClick={(e)=>{
            let nameObj = document.getElementById("name").value; 
            let priceObj = document.getElementById("price").value;               
            Update({productName : ((nameObj==="")?product.productName :nameObj ) ,price : ((priceObj === "")? product.price:priceObj)})
       } }>Update</button>
               </form>

        </>
        
    )

}


