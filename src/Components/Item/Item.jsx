import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({itemId,nom, precio ,img}) => {
    const back = {backgroundImage: `url(${img})`}
   
    return (
    <div class="card1">
        <div class="img1" style={back}></div>
        <div class="info1">
            <h2>{nom}</h2>
            <p> ${precio}</p>
        </div>
            <Link  className="btn" to={`/item/${itemId}`}>Ver Detalle</Link>
    </div>

    );
}

export default Item