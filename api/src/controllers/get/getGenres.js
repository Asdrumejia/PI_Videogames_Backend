const axios = require("axios");
const { Genre } = require("../../db");
const { API_KEY } = process.env;


const getGenres = async () => {
  const apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  const dataGenres = apiGenres.data
  const genres = dataGenres.results.map((g) => g.name);

  genres.map((g) => Genre.findOrCreate({
    where: {name: g}
    })
  );

  const aLLGenres = await Genre.findAll();

  return aLLGenres;

};


module.exports = {
    getGenres
}


