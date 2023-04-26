import { useState, useEffect } from "react"
/* import { getUnProducto } from "../../asyncmock" */
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { db } from "../../Services/Firebase/config"
import {getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    
    const {idItem} = useParams();

    useEffect (()=>{
        const newDoc = doc (db, "productos", idItem);
        getDoc (newDoc)
            .then(res => {
                const data = res.data();
                const newProd = {id: res.id, ...data}
                setProducto(newProd)
            })
            .catch(error => console.log(error ))
    }, [idItem])

/*     useEffect(() => {
        getUnProducto(idItem)
            .then(res => setProducto(res))
    },[idItem]) */
    
    const colorBack = {backgroundColor:`#EDF6F9`}
    return (
        <div className="iDC" style={colorBack}>
        <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer