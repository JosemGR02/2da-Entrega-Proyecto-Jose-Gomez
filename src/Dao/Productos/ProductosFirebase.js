
import { ContenedorFirebase } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class ProductosFirebase extends ContenedorFirebase {
    constructor() {
        super(config.DATABASES.firebase);
    }
}