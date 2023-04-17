import "./ItemDetail.css"
const ItemDetail = ({itemId, nom, precio,img, det}) => {
    return (
        <div className="prodCard">
        <img className="imgProd" src={img} alt={nom} />
        <h3>Nombre: {nom} </h3>
        <p>Precio: {precio} </p>
        <p>Id: {itemId}</p>
        <p>{det}</p>
        <button className="btnProd" >Comprar</button>
    </div>
    )
}

export default ItemDetail