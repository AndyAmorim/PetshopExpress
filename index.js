//servidor e rotas
const express = require('express');
const petshop = require('./petshop')
const app = express();


//para ligar o servidor .listen
app.listen(3000,()=>{
    console.log('Servidor rodando')
});
// vai mostrar todos os metodos de petshop
// posso colocar por exemplo: petshop.listarPets()
console.log(petshop.listarPets());