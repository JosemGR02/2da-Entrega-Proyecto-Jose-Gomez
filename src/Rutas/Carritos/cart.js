import { Router } from "express";
import { FECHA_UTILS, ERRORES_UTILS } from "../../Utils/fecha-utils.js";
import { DaoCarrito, DaoProducto } from "../../Dao/index.js";


const ruta = Router();

ruta.get("/:id", async (solicitud, respuesta) => {
    const { id } = solicitud.params;

    const carrito = await DaoCarrito.obtenerXid(id);

    respuesta.send({ success: true, carrito });
});


ruta.post("/", async (solicitud, respuesta) => {
    const carritoBase = { timestamp: FECHA_UTILS.getTimestamp(), products: [] };

    const nuevoCarrito = await DaoCarrito.guardar(carritoBase);

    respuesta.send({ success: true, carritoId: nuevoCarrito.id });
});


ruta.post("/:carritoId/productos", async (solicitud, respuesta) => {
    const { productoId } = solicitud.body;
    const { carritoId } = solicitud.params;

    const carrito = await DaoCarrito.obtenerXid(carritoId);

    if (!carrito)
        return respuesta.send({ error: true, mensaje: ERRORES_UTILS.MESSAGES.NO_CART });

    const producto = await DaoProducto.getById(productoId);

    if (!producto)
        return respuesta.send({ error: true, mensaje: ERRORES_UTILS.MESSAGES.NO_PRODUCT });

    carrito.productos.push(producto);

    const carritoActualizado = await DaoCarrito.actualizar(carritoId, carrito);

    respuesta.send({ success: true, carrito: carritoActualizado });
});


export { ruta as RutaCarritos };