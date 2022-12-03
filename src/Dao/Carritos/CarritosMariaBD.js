
import { ContenedorMariaBD } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class CarritosMariaBD extends ContenedorMariaBD {
    constructor() {
        super(config.DATABASES.mariaBD);
    }
}


