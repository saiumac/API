import { useEffect, useState } from "react";

function useFetchApi(url){
    let [data, updateData] = useState([]);
    useEffect(()=>{
        getData()
    },
    [])

   async function getData(){
        let api = await fetch(url);
        let apiData = await api.json();
        console.log(apiData );
        updateData(apiData)
    }
    return data
}
export default useFetchApi;