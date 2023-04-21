import { useState, createContext } from "react";

export const CartContext = createContext({cart:[]});

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    /////
    console.log(cart)
    /////
    const addProd = (item, cantidad) =>{
        if (!isInCart(item.itemId)){
            setCart(prev => [...prev, {item, cantidad}])
        }else{console.log("Producto ya agregado")}
    }

    const delProd = (id) =>{
        const cartUpg = cart.filter (prod => prod.itemId !== id);
        setCart (cartUpg);
    }

    const cleanCart = () =>{
        setCart ([])
    }
    const isInCart = (id) =>{
        return cart.some (prod => prod.itemId ===id);
    }

    const totalCart = (cart)=>{
        return cart.reduce((total, producto) => total + producto.cantidad,0)
    }

    const precioCart = (cart) =>{
        return cart.reduce((total, producto) => total + (producto.item.precio * producto.cantidad),0)
    }

    return(
        <CartContext.Provider value = {{cart , addProd , delProd , cleanCart, precioCart, totalCart }}>
        {children}
        </CartContext.Provider>
    )

}