import { GraphicCard } from './GraphicCard';
import React, { useEffect, useState } from 'react';
import { getGraphics$ } from '../services/GraphicService';


export const GraphicsCardListContainer = () => {
    interface graphicCard {
        id: number,
        name: string,
        price: number,
        model:string
    }
    
    const [graphicsCardList, setGraphicsCardList] = useState(Array<graphicCard>);

    useEffect(() => {
        getGraphics$.subscribe({
            next: value => setGraphicsCardList(value.response as Array<graphicCard>),
            error: err => console.log(err)
          });
    }, [])

    return(
        <ul>
        {
            graphicsCardList.map((item) => 
            <li>
                <GraphicCard
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    model={item.model} />
            </li>)
        }
        </ul>
    )
}