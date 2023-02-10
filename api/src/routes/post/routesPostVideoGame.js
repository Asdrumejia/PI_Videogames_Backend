const { Router } = require ("express");
const { postVideoGame } = require("../../controllers/post/postVideogame")


const router = Router();


router.post("/", async (req, res) => {
    const {name, description, released, rating, platforms, genres, image} = req.body;
    try {
        if(!name || !description || !released || !rating || !genres || !platforms || !image){
            return res.status(404).json("Missing data to create video game");
        }
        const newVideoGame = await postVideoGame(name, description, released, rating, platforms, genres, image);
        res.status(200).send(newVideoGame);
    } catch (error) {
        res.status(404).send(error.message);
    }
});


module.exports = router;