import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductos, getCatProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);

    const {idCategoria} = useParams();

    useEffect(()=>{
        const funcionProductos = idCategoria ? getCatProductos : getProductos;
        
        funcionProductos(idCategoria)
        .then (res => setProductos(res))
        .catch (error => console.error(error))
    }, [idCategoria])
    
    const colorBack = {backgroundColor:`#EDF6F9`}
    return (
        <div className='iLC' style={colorBack} >
            <h2>Nuestros Productos</h2>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer