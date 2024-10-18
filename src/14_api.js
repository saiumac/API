import "./index.css"
function ProductCard(props){
    return(
        <div style={{width:"300px",border:"1px solid #000", margin:"10px",fontFamily:"system-ui",padding:"10px",boxShadow:"5px 5px 10px grey"}} className="productCard">
           <center> <img className="productImage" srcSet={props.image} alt="logo" style={{height:"300px"}}/></center>
           <div className="innerDiv">
           <h4>{props.stars}</h4>
            <h4>ID : {props.id}</h4>
            <h4>Name : {props.title}</h4>
            <h2>Price : {props.price}</h2>
            <p><strong>Description :</strong> {props.description}</p>
           </div>
        </div>
    )
}
export default ProductCard;