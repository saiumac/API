import { useParams,useLocation } from "react-router-dom";

function Contact(){
    let {id, name} = useParams();
    let queryparams = useLocation();
    let queryParams = new URLSearchParams(queryparams.search)
    return (
        <h1>This is contact section...</h1>
    )
}

export default Contact;