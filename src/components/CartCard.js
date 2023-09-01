import "./CardCart.css"
import {remove} from "../store/CartSlice"
import { useDispatch } from "react-redux"
export const CartCard = ({product}) => {

  const dispatch = useDispatch()
const {name, price, image} = product

  return (
    <div className="cartCard">
    <img src={image} alt={image} />
    <p className="productName">{name}</p>
    <p className="productPrice">${price}</p>
 <button onClick={()=>dispatch(remove(product))}>Remove</button>
    </div>
  )
}
