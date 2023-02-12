const router = require('express').Router();
const{getAllPokemons, addPokemon, findPokemon, deletePokemon} = require('../servises/functions')

router.get("/", async(req, res) => {
  res.send(await getAllPokemons());
});

router.get("/:id", async(req, res) => {
res.send(await findPokemon(req.params.id));
});

router.post('/', async (req, res) => {
    const newPokemon = await addPokemon(req.body)
    res.status(201).send(newPokemon);
})

router.delete("/:id", async(req, res) => {

  res.send(await deletePokemon(req.params.id));
});

router.put("/", (req, res) => {
  res.send("Hello world");
});

router.patch("/", (req, res) => {
  res.send("Hello world");
});




module.exports = router