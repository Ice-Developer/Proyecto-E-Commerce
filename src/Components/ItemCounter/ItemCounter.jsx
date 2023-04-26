import { useState } from "react";
import "./ItemCounter.css"
    const ItemCounter = ({inicial, stock, funcionAgregar} ) =>{
        const [contador, setContador] = useState(inicial)
    
        const incrementar = () =>{
            if (contador < stock){
                setContador(contador + 1);
            }
        }
    
        const decrementar = () =>{
            if(contador > inicial){
                setContador (contador - 1);
            }
        }
        //El contador se muestra unicamente si el stock del producto es superior a 1, ya que hay productos digitales
        //que no se comercializan por cantidad.

        return (
            <div className="contador">
                {stock === 0 ? 
                (<>
                <div className="pulsadores">
                    <p style={{color:"red"}}> Producto sin Stock</p>
                </div>
                </>) : (stock >1 ? 
                (<>
                <div className="pulsadores">
                    <button onClick={decrementar}> - </button>
                    <p> {contador} </p>
                    <button onClick={incrementar}> + </button>
                </div>
                <button className="agregar" onClick={ () => funcionAgregar(contador)} disabled={stock === 0} >Agregar al Carrito</button></>) : 
                (<button className="agregar" onClick={ () => funcionAgregar(contador)} disabled={stock === 0} >Agregar al Carrito</button>) )
                }
            </div>
        )
    }


export default ItemCounter
