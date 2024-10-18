// import { useEffect, useState } from "react";

// import { useState } from "react";

// function PostApi(){
// let [data, updateData] = useState([]);

// useEffect(()=>{
// postdata()
// },[])

// async function postdata(){
//     let res = await fetch('https://fakestoreapi.com/products/7',{
//         method:"PUT",
//         body:JSON.stringify(
//             {
//                 title: 'Vivo X100 pro',
//                 price: 100000,
//                 description: 'one of best mobile for caturing images and shooting beautiful videos',
//                 image: 'https://i.pravatar.cc',
//                 category: 'mobile'
//             }
//         )
//     })
//     let udata = await res.json();
//     updateData(udata)
// }

// return (
//     <>
//     <h1>{}</h1>
//     </>
// )
// }
// function PostApi(){
//     let [count,updateCount] = useState(0)
//     return (
//         <>
//         <h1>Count : {count}</h1>
//         <button onClick={()=>{setInterval(()=>{
//             updateCount(++count)
//         },1000)}}>UpdateCount</button>
//         </>
//     )
// }


// export default PostApi;