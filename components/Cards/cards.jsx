import "./cards.css"

export default function Card(props){
    return(
        <div className="cards-body">
            <p>{props.comment}</p>
            <h1>{props.name}</h1>
        </div>
    )
}