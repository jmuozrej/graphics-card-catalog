import { getSuggestedQuery } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { getGraphics$ } from '../services/GraphicService';
import GraphicCard from './GraphicCard';

interface graphicCard {
    id: number,
    name: string,
    price: number,
    model:string
}
export const GraphicsCardListContainer = () => {
    const [query, setQuery] = useState('')
    const [graphicsCardList, setGraphicsCardList] = useState(Array<graphicCard>);

    useEffect(() => {
        getGraphics$.subscribe({
            next: value => setGraphicsCardList(value.response as Array<graphicCard>),
            error: err => console.log(err)
          });
    }, [])

    return(
        <div>
            <input type='text' placeholder='Search...' onChange={(evt) => setQuery(evt.target.value)}/>
            <ul>
            {graphicsCardList.filter((graphic) => 
                    graphic.name.toLowerCase().includes(query))
                    .map((item) => 
                    <li><GraphicCard graphicCard={item} /></li>
                )
            }
            </ul>
        </div>
    )
}