const {Router} = require('express');
const {getGenres} = require('../../controllers/get/getGenres')


const router = Router();


router.get('/', async (req, res) => {
    const {name} = req.query;
    const genres = await getGenres();
    try {
        if(name){
            let filterGenre = genres.filter(g => g.name.toLowerCase().includes(name.toLocaleLowerCase()));
            filterGenre.length ? res.status(200).send(filterGenre) : res.status(404).send('Genre not found')
        }else{
            res.status(200).send(genres);
        }
    } catch (error) {
        res.status(404).send(error.message);
    }
});


module.exports = router;