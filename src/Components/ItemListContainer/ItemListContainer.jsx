import TitProd from '../TitProd/TitProd'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
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

    const colorBack = {backgroundColor:`#EDF6F9`}
    return (
        <div>
            <div className='iLC' style={colorBack} >
                <TitProd/>
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}
export default ItemListContainer