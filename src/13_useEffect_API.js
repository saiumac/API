// We have to call the API with useEffect() hook.


import { useEffect, useState } from "react";
import ProductCard from "./14_api";
import "./index.css"

function API() {
    let [products, UpdateProducts] = useState([])
    useEffect(()=>{
        getDetails()
    },[])

   async function getDetails(){
        let res = await fetch('https://fakestoreapi.com/products');
        let productList = await res.json()
        console.log(productList)
       UpdateProducts(productList)
    }

  if(products.length===0){
    return ("Fetching Data...")
  }
  else {
    return (

     <div className="containerCard" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",width:"100%",height:"fit-content"}}>

    {  products.map((cData)=>
      {
     return (<ProductCard key={cData.id} id={cData.id} category={cData.Category} title={cData.title} image={cData.image} description={cData.description} price={cData.price}></ProductCard>)
  }
      ) }
      </div>
  )
}
}

export default API;