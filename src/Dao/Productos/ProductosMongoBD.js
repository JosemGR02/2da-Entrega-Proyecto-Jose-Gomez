

import { ContenedorMongoBD } from "../../Contenedores/index.js";
import { ModeloProductos } from "../../models/index.js";


export class productsMongo extends ContenedorMongoBD {
    constructor() {
        super({
            name: ModeloProductos.ProductsCollection,
            schema: ModeloProductos.ProductSchema,
        });
    }
}

