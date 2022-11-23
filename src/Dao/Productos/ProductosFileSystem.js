

import { ContenedorFileSystem } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class productosFileSystem extends ContenedorFileSystem {
    constructor() {
        super(config.DATABASES.filesystem.PRODUCTOS_ARCHIVONOMBRE);
    }
}