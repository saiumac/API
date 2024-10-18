import { useParams, useLocation } from "react-router-dom";

function Home(){
    let {id, name} = useParams();
    let queryparams = useLocation();
    let queryParams = new URLSearchParams(queryparams.search)
    return (
        <>
        <h1>This is home section...</h1>
        <Items/>
        </>
    )
}

export default Home;
let pLang = [{id:1,lang:"HTML"}, {id:2,lang:"CSS"}, {id:3,lang:"JS"}]

function Items(){
    return (
        <>
        <h1>Programming Languages</h1>
        <ul>
        {pLang.map((val)=>{
            return (
                <li key={val.id}>{val.lang}</li>
            )
        })}
        </ul>
        </>
       
    )
}