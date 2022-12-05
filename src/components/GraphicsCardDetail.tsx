import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import '../style/GraphicsCardDetail.css'

interface graphicCard {
    id: number,
    name: string,
    price: number,
    model:string,
    ram: string,
}

export function GraphicsCardDetail() {
    const { idGraphic } = useParams()
    const graphicState = useSelector((state: RootState) => state.graphics.graphicCards)

    const [graphicCardDetails, setGraphicCardDetails] = useState({id: -1,
        name: '',
        price: -1,
        model:'',
        ram: ''});

    useEffect(() => {
        console.log(graphicState)
        setGraphicCardDetails(graphicState.filter((item) => item.id === Number(idGraphic))[0]);
    }, []);

    return (
        <div className='details-screen'>
            {<div className='details-rectangle'>
                <h2>{graphicCardDetails.name}</h2>
                <p>Price: {graphicCardDetails.price}</p>
                <p>Model: {graphicCardDetails.model}</p>
                <p>RAM: {graphicCardDetails.ram}</p>
            </div>}
        </div>
    );
}