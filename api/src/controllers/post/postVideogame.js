const { Videogame, Genre } = require("../../db");


const postVideoGame = async (name, description, released, rating, platforms, genres, image, createdInD) => {
    const newVideoGame = await Videogame.create({
        name, 
        description, 
        released, 
        rating,
        platforms,
        image,
        createdInD
    });

    let genresDb = await Genre.findAll({
        where: { name: genres }
    });
    
    await newVideoGame.addGenre(genresDb);
    return newVideoGame;
};


module.exports = {
    postVideoGame
}
