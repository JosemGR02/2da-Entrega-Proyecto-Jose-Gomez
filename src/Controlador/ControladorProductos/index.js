
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
        respuesta.send({ error: "Internal server error" });
    }
};

const obtenerXid = async (solicitud, respuesta) => {
    const { id } = solicitud.params;

    const producto = await DaoProductos.obtenerXid(id);

    respuesta.send(producto);
};

const crearProducto = async (solicitud, respuesta) => {
    try {
        const { titulo, descripcion, codigo, imagen, precio, stock } = solicitud.body;

        // con el validador que creamos en el archivo joi validator, podemos invocar al método validateAsync y pasarle las propiedades que creemos seran nuestro producto, y si están bien, nos devolvera el objeto que guardamos en product
        // si no, saltará al catch
        const nuevoProducto = await JOI_VALIDACION.producto.validateAsync({
            titulo, descripcion, codigo, imagen, precio, stock,
            timestamp: FECHA_UTILS.getTimestamp(),
        });

        const productoCreado = await DaoProductos.guardar(nuevoProducto);

        respuesta.send(productoCreado);
    } catch (error) {
        // no seria recomendable guardar logs de errores de input de usuario, que genera joi
        // normalmente guardariamos errores propios e internos del servidor
        await UTILIDADES_LOGGER.addLog(error);
        respuesta.send(error);
    }
};

const eliminarXid = async (solicitud, respuesta) => {
    try {
        const { id } = solicitud.params;

        await DaoProductos.eliminarXid(id);

        respuesta.send({ success: true });
    } catch (error) {
        console.error(error);
        respuesta.send({ error: "Ocurrio un error" });
    }
};

export const controladorProductos = {
    obtenerTodos,
    obtenerXid,
    crearProducto,
    eliminarXid,
};