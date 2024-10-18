import {useContext} from "react"
import { context } from "./18_useContext";

function Product(){
let val = useContext(context)

return (
  <>
  <h1>This is Product page</h1>
  <h3>Name :{val.Name}</h3>
  <h3>Age :{val.Age}</h3>
  <h3>Place :{val.Place}</h3>
  </>
)
}

export default Product;
