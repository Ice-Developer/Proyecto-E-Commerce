import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {cart, cleanCart, totalCart, precioCart} = useContext (CartContext);
    
    if (totalCart===0){
        return(
            <>
            <h2>Carrito de compras vacio</h2>
            <Link to='/'>Volver al Inicio</Link>
            </>
        )
    }

    return (
        <div>
            {cart.map(producto => <CartItem key={producto.itemId} {...producto}/>)}
            <h3>Total a pagar: $ {precioCart(cart)}</h3>
            <button onClick={()=> cleanCart()}> Vaciar Carrito</button>
            <Link to='/checkout'> Finalizar Compra </Link>
        </div>
    )
}

export default Cart