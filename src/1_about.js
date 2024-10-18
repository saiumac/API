import { useParams, useLocation } from "react-router-dom";

function About(){
    let {id, name} = useParams();
    let queryparams = useLocation();
    let queryParams = new URLSearchParams(queryparams.search)
    return (
        <h1>This is about section...</h1>
    )
}

export default About;