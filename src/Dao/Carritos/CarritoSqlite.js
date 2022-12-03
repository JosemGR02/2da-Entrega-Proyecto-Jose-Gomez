
import { ContenedorSqlite } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class CarritoSqlite extends ContenedorSqlite {
    constructor() {
        super(config.DATABASES.sqlite3);
    }
}

