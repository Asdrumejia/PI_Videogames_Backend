const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routesGetVideogames = require('./get/routesGetVideogames');
const routesGenres = require('./get/routesGenres')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', routesGetVideogames);

router.use('/genres', routesGenres);



module.exports = router;
