
import { contenedorSqlite } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class carritoSqlite extends contenedorSqlite {
    constructor() {
        super(config.DATABASES.sqlite3);
    }
}

