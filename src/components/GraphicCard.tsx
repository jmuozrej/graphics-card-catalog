import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './GraphicCard.css'

interface Item {
    id: number,
    name: string,
    price: number,
    model: string
}
export const GraphicCard = ({
    id,
    name,
    price,
    model,
}: Item) => {

    const [graphicFeatures, setGraphicFeatures] = useState({});
    useEffect(() => {
        setGraphicFeatures({id, name, price, model})
    }, [])
    
    return (
        <ul>
            <li><h1><Link key={id} to={`/details/${id}`}/>{name}</h1></li>
            <li>Price: {price}</li>
            <li>Model: {model}</li>
        </ul>
    )
}
function goDetails() {
    
}