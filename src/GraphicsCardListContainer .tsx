import { GraphicCard } from './GraphicCard/GraphicCard';
import React, { useEffect, useState } from 'react';

const INITIAL_STATE = [
    {
      id: 1,
      name: "NVIDIA",
      price: 500,
      model: "4090"
    },
    {
      id: 0,
      name: "AMD",
      price: 600,
      model: "4090"
    },
  ]

const [graphicsCardList, setGraphicsCardList] = useState([{}]);


useEffect(() => {
    //Se haria el fetch de datos a la API
    setGraphicsCardList(INITIAL_STATE)
})

interface Props {
    graphicCards: Array<{
        id: number,
        name: string,
        price: number,
        model:string
    }>
}
export const GraphicsCardListContainer = () => {
    return(
        <ul>
        {
            graphicsCardList.map((item) => <li>
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