import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const CartItem = ({item, cantidad}) => {
    const {delProd } = useContext (CartContext);
    return (
        <div>
            <h4>{item.nom}</h4>
            <p>Cantidad: {cantidad}</p>
            <p>Precio por unidad: ${item.precio}.-</p>
            <button onClick={()=>delProd()}>eliminar</button>
        </div>
    )
}

export default CartItem