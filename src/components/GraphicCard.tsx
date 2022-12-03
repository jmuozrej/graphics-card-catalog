import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './GraphicCard.css'

interface Props {
    graphicCard: {
        id: number,
        name: string,
        price: number,
        model: string
    }
}
const GraphicCard = ({graphicCard}: Props) => {
    return (
        <ul>
            <h1 key={graphicCard.id}>
                <Link to={`/details/${graphicCard.id}`}>{graphicCard.name}</Link>
            </h1>
            <li>Price: {graphicCard.price}</li>
            <li>Model: {graphicCard.model}</li>
        </ul>
    )
}
export default GraphicCard