import axios from "axios";

export const getData = async (data) => {
   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`);
   return response.data;
}
