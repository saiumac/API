import { useEffect, useMemo, useState } from "react";

// function Memo(){
//     let [val, updateVal] = useState(0)
//     let num1 = 10;
//     let num2 = 25;

//    let sum = useMemo(()=>{
//         return num1 + num2
        
//     },[num1,num2]

// )
   

//     return(
//         <>
//         <h1>Count : {val}</h1>
//         <button onClick={()=>{
//             updateVal(val + 1)
//         }}>Update Value</button>

//         <h1>Sum : {sum}</h1>
//         </>
//     )
// }


// function Memo(){
//     const [timer, updateTimer] = useState(new Date().toLocaleTimeString())

//     useEffect(()=>{
//         let sec = setInterval(()=>{
//             updateTimer(new Date().toLocaleTimeString())
//         },1000)
//     },[])
     
//     const [products, updateProducts] = useState([
//         {id:1,name:"Vivo X60",price:40000},
//         {id:2,name:"Vivo X60 Pro",price:55000},
//         {id:3,name:"Vivo T15 5G",price:25000},
//         {id:4,name:"Redmi note 12" ,price:52000}
//     ])

//     const [searchText, updateSearchText] = useState("");
//     const filteredProducts = useMemo(()=>{
//         console.log(products)
//         return products.filter((p)=>{
//             return p.name.toLowerCase().includes(searchText.toLowerCase())
//         })
//     },[products,searchText])

//     return(
//         <>
//      <h1>{timer}</h1>
//      <input type="text" value={searchText} onChange={e=>updateSearchText(e.target.value)} placeholder="search products" /><br></br><br></br>
//      <table border={2} style={{width:"50%"}}>
//         <thead>
//         <tr align="center">
//         <th>Sl.no</th>
//         <th>Name</th>
//         <th>Price</th>
//         </tr>
//         </thead>
//        {
//         filteredProducts.map((p)=>(
//             <tbody key={p.id}>
//             <tr align="center" >
//                 <td>{p.id}</td>
//                 <td>{p.name}</td>
//                 <td>{p.price}</td>
//             </tr>
//             </tbody>
            
//         ))
//        }
//      </table>
//         </>
//     )
// }

// function Memo(){
//     const [timer, updateTimer] = useState(new Date().toLocaleTimeString())
//     useEffect(()=>{
//      let time = setInterval(()=>{
//          updateTimer(new Date().toLocaleTimeString())
//      },1000)
//     },[])

//     const [products, updateProducts] = useState([
//         {id:1,name:"Vivo X60",price:40000},
//         {id:2,name:"Vivo X60 Pro",price:55000},
//         {id:3,name:"Vivo T15 5G",price:25000},
//         {id:4,name:"Redmi note 12" ,price:52000}
//     ])

//     const [searchText, updateSearchText] = useState("")

   
//     const filteredProducts = useMemo(()=>{
//             return  products.filter((p)=>{
//                     return p.name.toLowerCase().includes(searchText.toLowerCase())
//                 })
//         },[products, searchText])

//     return(
//         <>
//         <h1>{timer}</h1>
//         <input type="text" value={searchText} onChange={(e)=>{updateSearchText(e.target.value)}} />
//         <br></br><br></br>
//         <table border={2}>
//             <thead>
//                 <tr align="center">
//                     <th>Sl.no</th>
//                     <th>Name</th>
//                     <th>Price</th>
//                 </tr>
//                 </thead>
//                 {
//                     filteredProducts.map((p)=>(
//                         <tbody key={p.id}>
//                         <tr align="center">
//                             <td>{p.id}</td>
//                             <td>{p.name}</td>
//                             <td>{p.price}</td>
//                         </tr>
//                     </tbody>
//                     )
//                     )
//                 }
//         </table>
//         </>
//     )
// }

function Memo(){
    // let [list, updateList] = useState(["task1","task2"])
    let list = new Array(10).fill();

    return (
      <ul>
        {
            list.map((p,i)=>{
                return <li>Task{i+1}</li>
            })
        }
      </ul>
    )
}
export default Memo;