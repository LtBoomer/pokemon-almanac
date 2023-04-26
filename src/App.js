import { useEffect, useState } from "react";
import "./App.scss";
import { getData } from "./axios/axios-config";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import sageataDreapta from "./images/sageata dreapta.png";
import sageataStanga from "./images/sageata stanga.png";
import { useNavigate } from "react-router-dom";

function App() {
  const [cardModel, setCardModel] = useState([]);
  const [offsetVariable, setOffsetVariable] = useState(1);
  const [limit, setLimit] = useState(20);
  const [separatePokemon, setSeparatePokemon] = useState(-1)
  const navigate = useNavigate();

  useEffect(() => {
    let arrayModel = [];
    for (let i = offsetVariable; i <= limit; i++) {
      const getCards = async () => {
        const response = await getData(i);
          arrayModel.push({
            order:response.id,
            name: response.name,
            image: response.sprites.front_default,
            type:response.types[0].type.name
          });
      };
      getCards();
    }
    setTimeout(()=>{
      setCardModel(arrayModel);
    },100)
  }, [offsetVariable]);
  useEffect(() =>{
    if(separatePokemon !== -1){
      navigate(`/pokemon/${separatePokemon}`)
    }
  }, [separatePokemon])

  return (
    <main>
      <h1></h1>
      <div className="cards-wrapper">
        {cardModel?.length > 0 &&
          cardModel?.map((pokemon, index) => (
            <PokemonCard
              key={index}
              order={pokemon.order}
              name={pokemon.name}
              image={pokemon.image}
              type={pokemon.type} 
              click={setSeparatePokemon}
            />
          ))}
      </div>
      <div className="arrow-wrapper">
        <img src={sageataStanga} alt="left-arrow" onClick={() => {
              if(limit-20 <= 0){
                setLimit(360)
                setOffsetVariable(341)
              }else{
                setLimit(limit - 20)
                setOffsetVariable(offsetVariable - 20)
              }
          }}/>
        <img
          src={sageataDreapta}
          alt="right-arrow"
          onClick={() => {
            limit > 340 ? setLimit(20) : setLimit(limit+20);
            limit > 340 ? setOffsetVariable(1) : setOffsetVariable(offsetVariable + 20);
            
          }}
        />
      </div>
    </main>
  );
}

export default App;
