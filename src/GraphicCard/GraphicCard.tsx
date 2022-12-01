import { Link } from 'react-router-dom'
import './GraphicCard.css'

interface Item {
    id: number,
    name: string,
    price: number,
    model: string
}
export const GraphicCard = ({
    id,
    name,
    price,
    model,
}: Item) => {
    return <ul>
        <Link to='/details'><li><h1>
            {name}
        </h1></li></Link>
        <li>Price: {price}</li>
        <li>Model: {model}</li>
    </ul>
}

function goDetails() {
    
}