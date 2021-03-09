const axios = require('axios')
const express = require('express')
const path = require('path')
const app = express()

let todosPokemons = []

/**axios.get(' https://pokeapi.co/api/v2/pokemon?offset=1&limit=1118').then((response) => {
    console.log(response.data)
    let {results} = response.data
    for(pokemons of results){
        todosPokemons.push(pokemons.name)
        console.log(todosPokemons)
    }
})
*/


/** 
app.get('/pokemons', (req, res) => {
    const {nome} =  req.query
    let listaRetorno = todosPokemons.filter(i => i.includes(nome || ""))
    res.json(listaRetorno)
})
*/

app.use(express.static(__dirname + './src/public/img'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/index.html'))
})

app.listen(80, () => {
    console.log("Server is running")
})
