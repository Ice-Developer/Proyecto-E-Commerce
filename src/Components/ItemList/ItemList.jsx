import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productos}) => {
    return (
        <div className="contProductos">
            {productos.map(prod => <Item key= {prod.itemId} {...prod}/>)}
        </div>
    )
}

export default ItemList