const { Router } = require ("express");
const { postVideoGame } = require('../../controllers/post/postVideogame')


const router = Router();


router.post('/', async (req, res) => {
    const {name, image, description, released, rating, genres, platforms} = req.body;
    try {
        const newVideoGame = await postVideoGame(name, image, description, released, rating, genres, platforms);
        res.status(200).send(newVideoGame);
    } catch (error) {
        res.status(404).send(error.message);
    }
});



module.exports = router;