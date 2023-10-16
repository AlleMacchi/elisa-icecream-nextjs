import "./cards.css"

export default function Card(props){
    return(
        <div className="cards-body">
            <p>{props.comment}</p>
            <div className="mg-rating">
                <span><img src="./Star.svg" alt="" /></span>
                <span><img src="./Star.svg" alt="" /></span>
                <span><img src="./Star.svg" alt="" /></span>
                <span><img src="./Star.svg" alt="" /></span>
                <span><img src="./Star.svg" alt="" /></span>
            </div>
            <h1>{props.name}</h1>
        </div>
    )
}