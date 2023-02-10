const { Router } = require("express");
const { deleteVideogame } = require("../../controllers/delete/deleteVideogame");


const router = Router();


router.delete("/:id", async (req, res) => {
    try {
       const {id} = req.params;
       const deleted = await deleteVideogame(id);
     res.status(200).send("Videogame successfully deleted");
    } catch (error) {
        res.status(400).send(error.message);
    }
});


module.exports = router;