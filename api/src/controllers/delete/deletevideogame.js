const { Videogame } = require("../../db");


const deleteVideogame = async function (id){
   const deleteDb = await Videogame.findByPk(id);

   const destroyVideogame = deleteDb?.destroy();

   return destroyVideogame;
};


module.exports = {
    deleteVideogame
}