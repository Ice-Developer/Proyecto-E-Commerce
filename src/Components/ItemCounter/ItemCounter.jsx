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
                    <button onClick={decrementar}className="btnPulsador"> - </button>
                    <p > {contador} </p>
                    <button onClick={incrementar}className="btnPulsador"> + </button>
                </div>
                <button type="button" className="buttonAC" onClick={ () => {
                    funcionAgregar(contador);
                    }}  
                    disabled={stock === 0} >
                <span className="button__text">Agregar al Carrito</span>
                <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                </button></>) : 
                (<button type="button" className="buttonAC" onClick={ () => {
                    funcionAgregar(contador); 
                    }}  
                    disabled={stock === 0} >
                <span className="button__text">Agregar al Carrito</span>
                <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                </button>) )
                }
            </div>
        )
    }


export default ItemCounter

