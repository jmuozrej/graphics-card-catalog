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
            <h2 key={graphicCard.id} className='graphic-card-title'>
                <Link to={`/details/${graphicCard.id}`}>{graphicCard.name}</Link>
            </h2>
            <div className='graphic-card-features'>
                <p className='graphic-card-price'>Price: {graphicCard.price}</p>
                <p className='graphic-card-model'>Model: {graphicCard.model}</p>
            </div>
        </div>
    )
}
export default GraphicCard