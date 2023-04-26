
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
/* import { getProductos, getCatProductos } from '../../asyncmock' */
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../Services/Firebase/config'
import {collection, getDocs, query, where} from 'firebase/firestore'


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([ ]);

    const {idCategoria} = useParams();

    useEffect(()=>{
        const misProd = idCategoria ? query(collection(db, "productos"), where("catId","==",idCategoria) ) : collection(db, "productos");
        getDocs (misProd)
            .then(res =>{
                const newProd = res.docs.map( doc =>{
                    const data = doc.data()
                    return {id:doc.id, ...data}
                })
                setProductos(newProd);
            })
            .catch(error => console.log(error))
    }, [ idCategoria])

    /* useEffect(()=>{
        const funcionProductos = idCategoria ? getCatProductos : getProductos;
        
        funcionProductos(idCategoria)
        .then (res => setProductos(res))
        .catch (error => console.error(error))
    }, [idCategoria]) */
    
    const colorBack = {backgroundColor:`#EDF6F9`}
    return (
        <div className='iLC' style={colorBack} >
            <h2>Nuestros Productos</h2>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer