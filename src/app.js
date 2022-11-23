
// imports
import express from "express";
import { config } from "./Configuracion/index.js";
import { RutaProductos, RutaCarritos } from "./Rutas/index.js";
import cors from "cors";


app.use(cors({ origin: "http://localhost:3000" }));


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


//Rutas
app.use("/api/productos", RutaProductos);
app.use("/api/carritos", RutaCarritos);


//Servidor
const server = app.listen(config.SERVER.PORT, () =>
    console.log(`Servidor escuchando en puerto: ${server.address().port}`)
);