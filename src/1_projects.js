import { useParams, useLocation } from "react-router-dom";

function Projects(){
    let {id, name} = useParams();
    let queryparams = useLocation();
    let queryParams = new URLSearchParams(queryparams.search)
    return (
        <h1>This is Projects section...</h1>
    )
}

export default Projects;