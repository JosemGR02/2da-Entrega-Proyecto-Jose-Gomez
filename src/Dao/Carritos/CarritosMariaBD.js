
import { contenedorMariaBD } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class carritosMariaBD extends contenedorMariaBD {
    constructor() {
        super(config.DATABASES.mariaBD);
    }
}


