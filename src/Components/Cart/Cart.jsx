import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {
    const {cart, cleanCart, precioCart} = useContext (CartContext);
    const colorBack = {backgroundColor:`#EDF6F9`}
    if (cart.length===0){
        return(
            <div  style={colorBack}>
            <div className="cartBanner"></div>
            <div className="cartVacio">
            <h1 style={{color:"black"}}>No hay producto en tu carrito</h1>
            <Link to='/'>
            <button className="btnVI">
                    <div class="textVI">
                        <span>Volver</span>
                        <span>al</span>
                        <span>inicio</span>
                    </div>
                    <div class="cloneVI">
                        <span>Volver</span>
                        <span>al</span>
                        <span>inicio</span>
                    </div>
                    <svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
            </button>
            </Link>
            </div>
            </div>
        )
    }

    return (
        <div style={colorBack}>
            <div className="cartBanner"></div>
            <div className="cartCont">
            <div className="ListProd">
            {cart.map(producto => <CartItem key={producto.itemId} {...producto}/>)}
            </div> 
            <div className="detCompra">
            <h3>Total: ${precioCart(cart)} </h3>
            <div className="btnsCart">
            <Link to='/checkout'>  
                <button className="btnFC"> 
                    <span class="labelFC">Finalizar Compra</span>
                    <span class="iconFC">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                    </span>
                </button>
            </Link>

            <button className="btnVaciarCart" onClick={()=> cleanCart()}>
                <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="iconVaciarCart">
                <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                </svg>
            </button>
            
            </div>
            </div>
            </div>
        </div>
    )
}

export default Cart

