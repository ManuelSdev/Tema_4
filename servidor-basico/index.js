//Cargar librería http
const http= require('http')

//Definir un servidor (usa meth createServer de librería require)

const server = http.createServer(function(request, response) {
    //response.writeHead(200, { 'Content-type': 'text/plain'});  
    response.writeHead(200, { 'Content-type': 'text/html'});  //ahora pilla el formato html

    response.end('Wake up, <b>Neddo...</b>');

})


//Arrancar el servidor
server.listen(1337, '127.0.0.1')

console.log('Servidor arrancado en http://127.0.0.1:1337')