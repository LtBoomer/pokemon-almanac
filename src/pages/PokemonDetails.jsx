import { getData } from "../axios/axios-config";
import "./PokemonDetails.scss";
import { useEffect, useState } from "react";
import sageataDreapta from "../images/sageata dreapta.png";
import sageataStanga from "../images/sageata stanga.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const PokemonDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [info, setInfo] = useState({
    image1: "",
    image2: "",
    name: "",
    ability1: "",
    ability2: "",
    mainType: "",
  });
  const [pokemonOrder, setPokemonOrder] = useState(id);
  const getPokemonData = async () => {
    const response = await getData(pokemonOrder);
    console.log(response);
    if (response) {
      setInfo({
        image1: response?.sprites.front_default,
        image2: response?.sprites.back_default,
        name: response?.name,
        ability1: response?.abilities[0].ability.name,
        ability2: response?.abilities[1].ability.name,
        mainType: response?.types[0].type.name,
      });
    }
  };

  useEffect(() => {
    getPokemonData();
  }, [pokemonOrder]);
 
  return (
    <div className="main-parent">
      <button className="back-button" onClick={()=>{
        navigate(`/`)
      }}>BACK</button>
      <div className="details-wrapper">
        <div className="image-wrapper">
          <div className="left-image image">
            {info?.image1.length > 0 && info?.image2.length > 0 && <img src={info?.image1} alt="this is supposed to be an image" />}
          </div>
          <div className="right-image image">
          {info?.image1.length > 0 && info?.image2.length > 0 && <img src={info?.image2} alt="this is supposed to be another image" />}
          </div>
        </div>
        <div className="info-wrapper">
          <h1> Name : {info.name}</h1>
          <div className="text-description">
            <p>Type : {info.mainType}</p>
            <p>Main ability : {info.ability1}</p>
            <p>Secondary ability : {info.ability2}</p>
          </div>
          <div className="arrow-wrapper">
            <img
              src={sageataStanga}
              alt="This is a left arrow"
              onClick={() => {
                if (pokemonOrder > 1) {
                  setPokemonOrder(pokemonOrder - 1);
                }
                else{
                    setPokemonOrder(360)
                }
              }}
            />
            <img src={sageataDreapta} alt="This is a right arrow" onClick={() => {
                if (pokemonOrder < 360) {
                  setPokemonOrder(pokemonOrder + 1);
                }
                else{
                    setPokemonOrder(1)
                }
              }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
