const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
  app.put(('/api/pokemons/:id'), (req,res)=>{
    const id = req.params.id
    Pokemon.update(req.body, {
      where : {id : id}
    })
    .then(_ =>{
      Pokemon.findbyPk(id).then(pokemon => {
        const message = `Le pokemon ${pokemon.name} a bien ete modifier`
        res.json({message, data: pokemon})
      })
      
    })
  })

}