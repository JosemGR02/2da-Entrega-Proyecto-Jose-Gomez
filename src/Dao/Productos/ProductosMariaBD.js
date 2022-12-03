
import { ContenedorMariaBD } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class ProductosMariaBD extends ContenedorMariaBD {
    constructor() {
        super(config.DATABASES.mariaBD);
    }
}