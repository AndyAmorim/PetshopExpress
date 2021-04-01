//servidor e rotas
const express = require('express');
const app = express();


//para ligar o servidor .listen
app.listen(3000,()=>{
    console.log('Servidor rodando')
});
