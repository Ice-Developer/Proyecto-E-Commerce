import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({itemId, nom, precio ,img}) => {
    return (
        <div className="prodCard">
            <img className="imgProd" src={img} alt={nom} />
            <h3>{nom} </h3>
            <p>Precio: ${precio} </p>
            <p>Id: {itemId}</p>
            <Link className="btnProd"  to={`/item/${itemId}`}> Ver Detalle </Link>
            
        </div>
    )
}

export default Item