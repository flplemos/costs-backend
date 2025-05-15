const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ static: './public' });

server.use(middlewares);

// Habilitar CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // permite todas as origens
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

server.use(router);

const port = process.env.PORT || 10000;
server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});
