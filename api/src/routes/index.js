const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideogames = require("./get/routesGetVideogames");
const getGenres = require("./get/routesGenres");
const postVideogame = require("./post/routesPostVideoGame");
const putVideogame = require("./put/routesPutVideogame");
const deleteVideogame = require("./delete/routesDeleteVideogame"); 


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/videogames", getVideogames);

router.use("/genres", getGenres);

router.use("/videogame", postVideogame);

router.use("/videogame", putVideogame);

router.use("/videogame", deleteVideogame);



module.exports = router;
