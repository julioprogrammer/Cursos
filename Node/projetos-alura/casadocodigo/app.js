var express = require('express')
  , app     = express() ;

app.get('/produtos', function(req, res){
    res.send('<html><body><h1>Listagem de Produtos</h1></body></html>');
});

app.listen(3000, function(){
    console.log('o servidor esta rodando');
});