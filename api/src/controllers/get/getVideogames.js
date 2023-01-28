const axios = require('axios')
const { Videogame, Genre } = require('../../db');
const { API_KEY } = process.env;
 

const getVideoGames = async () => {
   const url = `https://api.rawg.io/api/games?key=${API_KEY}`
   const promise = await axios.get(url + "&page_size=100")
   const dataGames = promise.data
   const apiGames = dataGames.results.map((v) => {
    return{
        id: v.id,
        name: v.name,
        background_image: v.background_image,
        released: v.released,
        rating: v.rating,
        platforms: v.platforms.map((p) => p.platform.name).toString(),
        genres: v.genres.map((g) => g.name).toString()
    }
})


   const dbGames = await Videogame.findAll({
     include: {
        model: Genre,
        attributes: ["name"],
        through: {
            attributes: [],
        }
     }
   })

   
   const totalGames = apiGames.concat(dbGames)

   const listGames = totalGames.map(vg => {
    return{
        id: vg.id,
        name: vg.name,
        image: vg.background_image,
        description: vg.description,
        released: vg.released,
        rating: vg.rating,
        platforms: vg.platforms,
        genres: vg.genres,
        createdInDb: vg.createdInDb
    }
   })
   return listGames
}


const getDetail = async (id) => {
    if(!isNaN(id)){
        const dataApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        const detail = dataApi.data;
        const gameApiDetail = {
        name: detail.name,
          image: detail.background_image,
          description: detail.description.replace(/<[^>]*>?/g,''),
          released: detail.released,
          rating: detail.rating,
          genres: detail.genres.map((g) => g.name).toString(),
          platforms: detail.platforms.map((p) => p.platform.name).toString()
        }
        return gameApiDetail;
    }

    if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(id)){
         const responseDb = await Videogame.findByPk(id, {
            include: [ 
                {
                model: Genre,
                attributes: ["name"],
                through: {
                    attributes: [],
              },
            },
          ]
        })
       return responseDb;
    }
}


module.exports = {
 getVideoGames,
 getDetail
}