
import { contenedorMariaBD } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class productosMariaBD extends contenedorMariaBD {
    constructor() {
        super(config.DATABASES.mariaBD);
    }
}