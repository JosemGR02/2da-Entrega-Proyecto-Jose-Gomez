
import { DaoProductos } from "../../Dao/index.js";
import { FECHA_UTILS, ERRORES_UTILS, JOI_VALIDACION, UTILIDADES_LOGGER } from "../../Utils/fecha-utils.js";


const obtenerTodos = async (solicitud, respuesta) => {
    try {
        const producto = await DaoProductos.obtenerTodos();

        if (!producto) {
            return respuesta.send({ error: ERRORES_UTILS.MESSAGES.NO_PRODUCT });
        }
        respuesta.send(producto);
    } catch (error) {
        respuesta.send({ error, error: "Error al obtener los productos solicitados" })
    }
};

const obtenerXid = async (solicitud, respuesta) => {
    try {
        const { id } = solicitud.params;

        const producto = await DaoProductos.obtenerXid(id);

        respuesta.send(producto);
    } catch (error) {
        respuesta.send({ error, error: "Error al obtener el productos solicitado" })
    }
};

const crearProducto = async (solicitud, respuesta) => {
    try {
        const { titulo, descripcion, codigo, imagen, precio, stock } = solicitud.body;

        const nuevoProducto = await JOI_VALIDACION.producto.validateAsync({
            titulo, descripcion, codigo, imagen, precio, stock,
            timestamp: FECHA_UTILS.getTimestamp(),
        });

        const productoCreado = await DaoProductos.guardar(nuevoProducto);

        respuesta.send(productoCreado);
    } catch (error) {
        await UTILIDADES_LOGGER.addLog(error);
        respuesta.send({ error, error: "Error al crear el producto solicitado" })
    }
};

const eliminarXid = async (solicitud, respuesta) => {
    try {
        const { id } = solicitud.params;

        await DaoProductos.eliminarXid(id);

        respuesta.send({ success: true });
    } catch (error) {
        respuesta.send({ error, error: "Error al eliminar el producto solicitado" })
    }
};

export const controladorProductos = {
    obtenerTodos,
    obtenerXid,
    crearProducto,
    eliminarXid,
};
