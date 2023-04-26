import "./ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import { CartContext } from "../Context/CartContext";


const ItemDetail = ({itemId, nom, precio,img, det, stock}) => {
    const [agregarProducto, setAgregarProducto] = useState(0);
    
    const {addProd} = useContext(CartContext);



    const handlerCantidad = (cantidad) => {
        setAgregarProducto(cantidad);
        
        const item = {itemId, nom, precio };
        addProd(item, cantidad);
    } 

    return (
        <div className="prodCard">
        <img className="imgProd" src={img} alt={nom} />
        <h3>Nombre: {nom} </h3>
        <h3>Precio: {precio} </h3>
        <h4>Id: {itemId}</h4>
        <p>{det}</p>
        {
            agregarProducto >0 ? (<Link className="btnProd" to="/cart" >Comprar</Link>) : (<ItemCounter inicial={1} stock={stock} funcionAgregar ={handlerCantidad}/>)
        } 
    </div>
    )
}

export default ItemDetail