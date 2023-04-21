import "./NavList.css"
import NavItem from "../NavItem/NavItem"

const NavList = ({nav}) => {
    return (
        <div className="contNavegador">
                {nav.map(nav => <NavItem key= {nav.itemId} {...nav}/>)}
            </div>
    )
}

export default NavList