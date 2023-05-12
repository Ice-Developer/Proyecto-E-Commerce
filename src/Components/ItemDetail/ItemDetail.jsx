import "./ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import { CartContext } from "../Context/CartContext";
import Swal from "sweetalert2";



const ItemDetail = ({itemId, nom, precio,img, det, stock}) => {
    const [agregarProducto, setAgregarProducto] = useState(0);
    
    const {addProd} = useContext(CartContext);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
    })


    const handlerCantidad = (cantidad) => {
        setAgregarProducto(cantidad);
        const item = {itemId, nom, precio, img };
        addProd(item, cantidad, img)

        Toast.fire({
            icon: 'success',
            title: item.nom + "     $"+ item.precio,
            html:'<p> Producto agregado al carrito</p>'
        }) 
    } 


    const back = {backgroundImage: `url(${img})`}

    return (
                <div className="prodCard">
                    <div className="contenedorImg" style={back}>
                    </div>
                    <div className="detComp">
                        <div className="InfoProd">
                            <h1>{nom} </h1>
                            <h2>${precio} </h2>
                            {
                                isNaN(stock) ? (<h3> Producto Digital - Siempre Disponible</h3>): (<h3>Cantidad disponible {stock}</h3>)
                            }
                            <p>{det}</p>
                        </div>
                        <div className="btns">
                        {agregarProducto >0 ? (
                            <div className="btnsDetalle">
                                <Link className="btnProd1" to="/">
                                    <button className="learn-more1">
                                    <span className="circle1" aria-hidden="true">
                                    <span className="icon1 arrow1"></span>
                                    </span>
                                    <span className="button-text1">Seguir Comprando</span>
                                    </button>
                                </Link>
                                <Link className="btnProd1" to="/cart">
                                    <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Finalizar Compra</span>
                                    </button>
                                </Link>
                            </div>
                            ) : (
                            <ItemCounter 
                                inicial={1}
                                stock={stock}
                                funcionAgregar={handlerCantidad}
                            />
                        )}
                        </div>
                    </div>
                </div>
    )
  
}

export default ItemDetail

