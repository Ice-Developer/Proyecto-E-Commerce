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
    
    return (
        <div>
            <h2>Nuestros Productos</h2>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer;