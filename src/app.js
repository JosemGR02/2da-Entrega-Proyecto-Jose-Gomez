
// imports
import express from "express";
import { config } from "./Configuracion/index.js";
import { RutaProducto, RutaCarrito } from "./Rutas/index.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


//Rutas
app.use("/api/productos", RutaProducto);
app.use("/api/carritos", RutaCarrito);


//Servidor
const server = app.listen(config.SERVER.PORT, () =>
    console.log(`Servidor escuchando en puerto: ${server.address().port}`)
);

