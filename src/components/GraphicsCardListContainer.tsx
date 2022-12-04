import React, { useEffect, useState } from 'react';
import { getGraphics$ } from '../services/GraphicService';
import GraphicCard from './GraphicCard';
import InfiniteScroll from './InfiniteScroll';

interface graphicCard {
    id: number,
    name: string,
    price: number,
    model:string
}

export const GraphicsCardListContainer = () => {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false);
    const [graphicsCardList, setGraphicsCardList] = useState(Array<graphicCard>);
    
    function initGraphics() {
        setLoading(true)
        getGraphics$.subscribe({
            next: (value) => {
                let data = value.response as Array<graphicCard>
                setGraphicsCardList([...graphicsCardList, ...data])
            },
            error: err => console.log(err)
          });
          setLoading(false);
    }

    useEffect(() => {
        initGraphics()
    }, [])

    return(
        <div>
            <input type='text' placeholder='Search...' onChange={(evt) => setQuery(evt.target.value)}/>
            <InfiniteScroll
                isLoading={loading}
                onBottomHit={initGraphics}
            >
            <ul>
            {graphicsCardList.filter((graphic) => 
                    graphic.name.toLowerCase().includes(query))
                    .map((item) => 
                    <li><GraphicCard graphicCard={item} /></li>
                )
            }
            </ul>
            </InfiniteScroll>
        </div>
    )
}