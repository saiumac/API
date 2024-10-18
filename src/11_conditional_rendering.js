function Cond(){
    return (
        <>
        <Header></Header>
        {isAdmin &&<AdminBlock></AdminBlock>}
        </>
        
    )}
    
    let loggedIn = true;
    let isAdmin = true;
    function Header(){
        return (
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            {loggedIn?(<li>Logout</li>):(<li>Login</li>)}
        </ul>
    )
    }
    function AdminBlock(){
        return(
            <>
            <h1>Hello</h1>
            <p>This is admin block</p>
            </>
        )
    }
    export default Cond;