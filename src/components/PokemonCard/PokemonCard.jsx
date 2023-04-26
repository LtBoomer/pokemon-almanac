import "./PokemonCard.scss"

const PokemonCard = (props) =>{
    const  {name, image, type,order, click} = props;
    return <div className="card" onClick={()=>click(order)}>
        <img src={image} alt="pokemon-picture"/>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
    </div>;
}

export default PokemonCard;