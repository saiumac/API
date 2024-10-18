import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css'
import { ProductCard } from './23.1_productcard';


function API(){
    // let api = axios.create({
    //     baseURL:'https://fakestoreapi.com'
    // })
    let [data, updateData] = useState([])

 useEffect(()=>{
    getData()
 },[])

async function getData(){
    let res = await axios.get('https://fakestoreapi.com/products')
    // console.log(res.data)
    updateData(res.data)
 }

 return (
    <>
    <h1 className='text-center'>CARDS</h1>
 <div style={{height:'fit-content'}} className='container-fluid w-100 d-flex flex-row justify-content-evenly  flex-wrap gap-1'>
    {
        data.map((cards)=>{
            return(
             <><ProductCard key={cards.id} id={cards.id} image={cards.image} price={cards.price} des={cards.description} ></ProductCard></>
            )
        })
    }
            </div>
            </>
 )
}

export default API;