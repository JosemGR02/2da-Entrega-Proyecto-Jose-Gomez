
import { ContenedorSqlite } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class ProductoSqlite extends ContenedorSqlite {
    constructor() {
        super(config.DATABASES.sqlite3);
    }
}

