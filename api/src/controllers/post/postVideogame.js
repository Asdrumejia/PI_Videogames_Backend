const { Videogame, Genre } = require("../../db");

const postVideoGame = async (name, image, description, released, rating, genres, platforms) => {
       if(!name || !image || !description || !released || !rating || !genres || !platforms){
        throw('Missing data to create video game')
} else{
    const newVideoGame = await Videogame.create({
        name, 
        image,
        description, 
        released, 
        rating,
        platforms
    })

    let genresDb = await Genre.findAll({
        where: { name: genres.length ? genres : genres?.map(g => g.name) }
    })
    
    await newVideoGame.addGenre(genresDb);
    return newVideoGame;
  }
};


module.exports = {
    postVideoGame
}
