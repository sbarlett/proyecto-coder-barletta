import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../utils'
import ItemDetail from '../ItemDetail/ItemDetail'


export const ItemDatailContainer = () => {

    const [product, setProduct] = useState([])

    const { idItem } = useParams()

    useEffect(() => {
        getProduct(idItem)
            .then( res => setProduct(res))
    }, [idItem])
    
  return (
        <ItemDetail {...product}/>
    )
}

