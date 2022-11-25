
import { contenedorMariaBD } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class carritosMariaBD extends contenedorMariaBD {
    constructor() {
        super(config.DATABASES.mysql);
    }
}

(servicioKnex.KnexMySQL, "productos")


// sql: () => {
//     servicioKnex.init();
//     return {
//       daoProductos: new ContenedorSQL(servicioKnex.KnexMySQL, "productos"),
//       daoMensajes: new ContenedorSQL(servicioKnex.KnexSqlite, "mensajes"),
//     };
//   },