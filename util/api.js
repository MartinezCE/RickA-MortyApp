import axios from "axios";

export const homePlanet = async (url) => {
  try {
    const res = await axios.get(`${url}`);
    return(res.data);
  } catch (e) {
    console.log(e);
  }
};
export const characters = async () => {
  try {
    const res = await axios.get(`https://rickandmortyapi.com/api/character`);
    return(res.data.results);
  } catch (e) {
    console.log(e);
  }
};

export const films = async()=>{
  try {
    const res = await axios.get(`https://rickandmortyapi.com/api/episode`);
    return(res);
  } catch (e) {
    console.log(e);
  }
};