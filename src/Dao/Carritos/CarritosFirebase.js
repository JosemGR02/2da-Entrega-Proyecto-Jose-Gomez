
import { ContenedorFirebase } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class CarritosFirebase extends ContenedorFirebase {
    constructor() {
        super(config.DATABASES.firebase);
    }
}

