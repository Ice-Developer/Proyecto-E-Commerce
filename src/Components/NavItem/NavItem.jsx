import { NavLink } from "react-router-dom"
import "./NavItem.css"


const NavItem = ({nom,img, mensaje}) => {
    const estiloImagen = {
        backgroundImage: `url(${img})`,
    };
    return (
        <li>
        <NavLink to={ nom }>
            <div className="card" style={estiloImagen}>
            <div class="img">
                <span style={estiloImagen}></span>
            </div>
            <div className="detalle">
                <h4>{mensaje}</h4>
            </div>
            </div>
        </NavLink>
        </li>
    );
    }

export default NavItem