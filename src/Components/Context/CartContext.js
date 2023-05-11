import { useState, createContext } from "react";

export const CartContext = createContext({cart:[]});

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);



    const isInCart = (itemId) =>{
        return cart.some (prod => prod.item.itemId ===itemId);
    }
    const addProd = (item, cantidad,img) =>{
        if (!isInCart(item.itemId)){
            setCart(prev => [...prev, {item, cantidad, img}]);
        }
            else{
                console.log("Producto ya agregado")
                setCart(prev => {
                        const updatedCart = prev.map(prod => {
                            if (prod.item.itemId === item.itemId) {
                                return {
                                item: prod.item,
                                cantidad: prod.cantidad + cantidad,
                                img: prod.img
                                };
                            }
                            return prod;
                            });
                            return updatedCart;
                        });
            }
    }

    const delProd = (id) =>{
        const cartUpg = cart.filter(prod => prod.item.itemId !== id );
        setCart(cartUpg);
    }

    const cleanCart = () =>{
        setCart ([])
    }
    
    const totalCart = (cart)=>{
        return cart.reduce((total, prod) => total + prod.cantidad,0)
    }

    const precioCart = (cart) =>{
        return cart.reduce((total, prod) => total + (prod.item.precio * prod.cantidad),0)
    }

    return(
        <CartContext.Provider value = {{cart , addProd , delProd , cleanCart, precioCart, totalCart }}>
        {children}
        </CartContext.Provider>
    )

}