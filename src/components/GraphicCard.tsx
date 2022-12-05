import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../style/GraphicCard.css'
import { graphicCard } from '../redux/states/graphicCards';

interface Props {
    graphicCard: graphicCard
}
const GraphicCard = ({graphicCard}: Props) => {
    return (
        <div>
            <h2 key={graphicCard.id}>
                <Link to={`/details/${graphicCard.id}`}>{graphicCard.name}</Link>
            </h2>
            <p>Price: {graphicCard.price}</p>
            <p>Model: {graphicCard.model}</p>
        </div>
    )
}
export default GraphicCard