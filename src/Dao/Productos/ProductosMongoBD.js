

import { contenedorMongoBD } from "../../Contenedores/index.js";
import { modeloProducto } from "../../Modelos/index.js";


export class productosMongoBD extends contenedorMongoBD {
    constructor() {
        super({
            nombre: modeloProducto.ColeccionProductos,
            schema: modeloProducto.ProductoEsquema,
        });
    }
}

