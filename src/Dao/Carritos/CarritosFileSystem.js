
import { ContenedorFileSystem } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class CarritoFilesystem extends ContenedorFileSystem {
    constructor() {
        super(config.DATABASES.filesystem.CARRITOS_ARCHIVONOMBRE);
    }
}

