import { useState, useEffect } from "react";

export const useContador = (stockInicial, stockMaximo, ) =>{
    const [contador, setContador] = useState(stockInicial)

    const incrementar = () =>{
        if (contador < stockMaximo){
            setContador(contador + 1);
        }
    }

    const decrementar = () =>{
        if(contador > stockInicial){
            setContador (contador - 1);
        }
    }
    return (
        <>
            <div>
                <button onClick={decrementar}> - </button>
                <p> {contador} </p>
                <button onClick={incrementar}> + </button>
            </div>
            <button >Agregar al Carrito</button>
        </>
    )
}

export const useFetch = (url) =>{
    const [data, setData] = useState(null);

    useEffect ( () =>{
        fetch(url)
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error(error))
    }, [url] )
    return data
}