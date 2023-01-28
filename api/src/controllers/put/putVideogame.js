const { Videogame } = require("../../db");


const putVideoGame = async (id, name, image, description, released, rating, genres, platforms) => {
   const VideogameDb = await Videogame.findByPk(id)

   VideogameDb?.update({
     name: name,
     image: image, 
     description: description, 
     released: released, 
     rating: rating, 
     genres: genres, 
     platforms: platforms
  
   }) 
  return VideogameDb
  
};


module.exports = {
    putVideoGame
}