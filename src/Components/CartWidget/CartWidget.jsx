import './CartWidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'


const CartWidget = () => {
    const {totalCart, cart} = useContext(CartContext);
    

    const imgCarrito = "../img/carrito.png"
    return (
        <div className='cartDiv'>
            <Link to='/Cart' className='cart'>
            <img className='imgCarrito' src= {imgCarrito} alt="Carrito" />
            <div className='cantidad'>
            {
                totalCart(cart)
            }
            </div>
            </Link>
            
        </div>
    )
}

export default CartWidget