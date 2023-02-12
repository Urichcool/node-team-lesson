const fs = require('fs').promises;

const path = require('path')

const filePath = path.join(__dirname, 'pokemons.json')

const readFile = async() => {
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data)
}

const getAllPokemons = () => {
    return readFile()
}

const addPokemon = async(data) => {
    const pokemonsArr = await readFile()
    const newObj = { ...data, id: pokemonsArr.length + 1 }
    pokemonsArr.push(newObj);
    await fs.writeFile(filePath, JSON.stringify(pokemonsArr))
    return newObj
}

const findPokemon = async (id) => {
     const pokemonsArr = await readFile();
    const findPokemon = pokemonsArr.find((pokemon) => pokemon.id === Number(id));
    return findPokemon
}

const deletePokemon = async (id) => {
    const pokemonsArr = await readFile();
    const newArr = pokemonsArr.filter((pokemon) => pokemon.id !== Number(id));
    await fs.writeFile(filePath, JSON.stringify(newArr));
return newArr
}


module.exports = {
    getAllPokemons,
    addPokemon,
    findPokemon,
    deletePokemon
}