import { Outlet, Link, useParams, useLocation } from "react-router-dom";

function User(){
    return(
        <>
        <button><Link to="order/fbdsjhfbdb26432165@260/515456231xsa5cdads2c1dv?#key=vsvsagvcsvcsv&45ccategory=jncjhbbxvcdv&posts=10">Orders</Link></button>
        <button><Link to="profile/sbcsabcjbs/sjbjsbadjbj?#bbcdhkey=bchdvchxnsakfgejd&category=bchgbdsgcdvcdsjhg&posts=11">Profile</Link></button>
        <h1>This is users component</h1> 

        <Outlet/>
        </>
    )
}

export function Order(){
    let {id, name} = useParams();
    let queryparams = useLocation();
    let queryParams = new URLSearchParams(queryparams.search);

    let category = queryParams.get("category");
    let posts = queryParams.get("posts")

    return (
        <>
        <h1>This is User orders page</h1>
        </>
    )
}

export function Profile(){
    let {id, name} = useParams();

    return (
        <>
        <h1>This is User profile page</h1>
      
        </>

    )
}

export default User;

