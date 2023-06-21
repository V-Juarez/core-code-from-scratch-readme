const { createServer } = require('http')

const server = createServer((req, res) => {
  console.log(req.url, req.method);
  res.writeHead(200)
  res.write('Hola desde un servidor con http')
  res.write(' Hola, segundo hola')
  res.end()
})

server.listen(4000, () => {
  console.log('Servidor escuchando en el puerto 4000');
})