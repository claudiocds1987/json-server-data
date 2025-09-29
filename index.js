/* const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port); */
const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// --- ZONA CRÍTICA: DEFINICIÓN DE HOST Y PUERTO ---
// 1. Render siempre asigna el puerto usando process.env.PORT.
// 2. El host DEBE ser '0.0.0.0' para que Render lo reconozca.
const port = process.env.PORT || 8080; 
const host = '0.0.0.0'; 
// -------------------------------------------------
server.use(cors()); // Esto permite TODAS las peticiones (incluyendo localhost:4200)
server.use(middlewares);
server.use(router);

// 🚨 CORRECCIÓN: Llamar a listen con el puerto Y el host
server.listen(port, host, () => {
    console.log(`JSON Server is running on http://${host}:${port}`);
});