import '../assets/css/card.css'

export function Card(props){
    return (
        <div class="card">
            <img src={props.image} alt="" />
            <div class="info">
                <h1>{props.author}</h1>
                <p>{props.content}</p>
                <button onClick={props.like} class="btn"><h1>&#128077;{props.yes}</h1></button>
                <button onClick={props.delike} class="btn"><h1>&#128078;{props.no}</h1></button>
            </div>
        </div>
    );
}