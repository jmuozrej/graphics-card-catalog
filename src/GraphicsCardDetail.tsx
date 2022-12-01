interface Props {
    graphicCard: {
        id: number,
        name: string,
        price: number,
        model:string
    }
}

export const GraphicsCardDetail: React.FunctionComponent<Props> = ({graphicCard}) => {
    return(
        <ul>
        <li><h1>
            {graphicCard.name}
        </h1></li>
        <li>Price: {graphicCard.price}</li>
        <li>Model: {graphicCard.model}</li>
    </ul>
    )
}