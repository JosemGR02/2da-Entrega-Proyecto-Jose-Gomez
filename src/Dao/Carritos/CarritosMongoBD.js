
import { ContenedorMongoBD } from "../../Contenedores/index.js";
import { ModeloCarrito } from "../../Modelos/index.js";


export class carritoMongoBD extends ContenedorMongoBD {
    constructor() {
        super({
            nombre: ModeloCarrito.CartCollection,
            schema: ModeloCarrito.CartSchema,
        });
    }

    async obtenerXid(id) {
        const respuesta = await this.model.findById(id).populate("productos");

        return respuesta;
    }
}
