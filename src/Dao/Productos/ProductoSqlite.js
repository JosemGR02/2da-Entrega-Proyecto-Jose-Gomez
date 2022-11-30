
import { contenedorSqlite } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class productoSqlite extends contenedorSqlite {
    constructor() {
        super(config.DATABASES.sqlite3);
    }
}

