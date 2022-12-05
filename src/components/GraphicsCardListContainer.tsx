import { CSSProperties, useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { appendGraphicList, graphicCard } from '../redux/states/graphicCards';
import { getGraphics$ } from '../services/GraphicService';
import GraphicCard from './GraphicCard';
import InfiniteScroll from './InfiniteScroll';
import '../style/GraphicsCardListContainer.css'

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export const GraphicsCardListContainer = () => {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false);
    const [graphicsCardList, setGraphicsCardList] = useState(Array<graphicCard>);
    const dispatch = useDispatch()
    
    function initGraphics() {
        setLoading(true)
        setTimeout(() => {
            getGraphics$.subscribe({
                next: (value) => {
                    let data = value.response as Array<graphicCard>
                    dispatch(appendGraphicList(data))
                    setGraphicsCardList([...graphicsCardList, ...data])
                },
                error: err => console.log(err)
              });
              setLoading(false);
        }, 1000)
    }

    useEffect(() => {
        initGraphics()
    }, [])

    return(
        <div className='list-screen-background'>
            <input className='input-list-cards' type='text' placeholder='Search...' onChange={(evt) => setQuery(evt.target.value)}/>
            <InfiniteScroll
                isLoading={loading}
                onBottomHit={initGraphics}
            >
            <ul className='grid-container'>
            {graphicsCardList.filter((graphic) => 
                    graphic.name.toLowerCase().includes(query) || graphic.model.toLowerCase().includes(query))
                    .map((item) => 
                    <li className='grid-item'><GraphicCard graphicCard={item} /></li>
                )
            }
            </ul>
            </InfiniteScroll>
            <ColorRing
                visible={loading}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#ff8000', '#ff8000', '#ff8000', '#ff8000', '#ff8000']}
            />
        </div>
    )
}