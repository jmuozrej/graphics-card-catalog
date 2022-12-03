import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGraphics$ } from "../services/GraphicService";

interface graphicCard {
    id: number,
    name: string,
    price: number,
    model:string
}

export function GraphicsCardDetail() {
    const { idGraphic } = useParams()

    const [graphicCardDetails, setGraphicCardDetails] = useState({id: -1,
        name: '',
        price: -1,
        model:''});

    useEffect(() => {
        getGraphics$.subscribe({
            next: value => {
                let response = value.response as Array<graphicCard>;
                setGraphicCardDetails(response.filter((item) => item.id === Number(idGraphic))[0])
            },
            error: err => console.log(err)
        });
    }, []);

    return (
        <ul>
            <li><h1>
                {graphicCardDetails.name}
            </h1></li>
            <li>Price: {graphicCardDetails.price}</li>
            <li>Model: {graphicCardDetails.model}</li>
        </ul>
    );
}