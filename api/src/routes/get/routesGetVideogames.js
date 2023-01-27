const {Router} = require('express');
const { getVideoGames, getDetail } = require('../../controllers/get/getVideogames');


const router = Router();


router.get('/', async (req, res) => {
  const {name} = req.query;
  const vGames = await getVideoGames();
  try {
    if(name){
      let gameFilter = vGames.filter(vg => vg.name.toLowerCase().includes(name.toLocaleLowerCase()));
      gameFilter.length ? res.status(200).send(gameFilter) : res.status(400).send('VideoGame not found')
  }else{
     res.status(200).send(vGames);
  }
  } catch (error) {
    res.status(400).send(error.message)
  }
})


router.get('/:id', async (req, res) => {
  //  const id = req.params.id
      const {id} = req.params
      const vGameD = await getDetail(id)
      try {
          res.status(200).send(vGameD)
      } catch (error) {
          res.status(400).send(error.message)
      }
  })



module.exports = router;