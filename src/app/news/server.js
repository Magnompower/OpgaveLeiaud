const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(cors({
  origin: "*", // Tillad alle oprindelser
  methods: ["GET", "POST", "PUT", "DELETE"], // Tilladte metoder
  allowedHeaders: ["Content-Type", "Authorization"]
}));

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
