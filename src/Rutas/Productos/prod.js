
import { Router } from "express";
import { verifyRole } from "../../middlewares/verifyRole.js";
import { controladorProductos } from "../../Controlador/index.js";


const ruta = Router();


ruta.get("/", controladorProductos.obtenerTodos);

ruta.get("/:id", controladorProductos.obtenerXid);

ruta.post("/", verifyRole, controladorProductos.crearProducto);

ruta.delete("/:id", controladorProductos.eliminarXid);

export { ruta as RutaProducto };


