
const CartItem = ({item, cantidad}) => {
    return (
        <div>
            <h4>{item.nom}</h4>
            <p>Cantidad: {cantidad}</p>
            <p>Precio por unidad: ${item.precio}.-</p>
        </div>
    )
}

export default CartItem