const { Router } = require('express');
const { putVideoGame } = require('../../controllers/put/putVideogame');


const router = Router();


router.put('/:id', async (req, res) => {
    try {
       const {id} = req.params
       const {name, image, description, released, rating, genres, platforms} = req.body 
       if(!name || !image || !description || !released || !rating || !genres || !platforms){
          res.status(404).send("Missing data to modify this video game")
       }else{
          const videoGameUpdated = await putVideoGame(id, name, image, description, released, rating, genres, platforms)
          res.status(200).send("Successfully modified video game")
       }
    } catch (error) {
        res.status(404).send(error.message)
    }
});


module.exports = router;