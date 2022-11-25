
import { contenedorFileSystem } from "../../Contenedores/index.js";
import { config } from "../../Configuracion/index.js";


export class carritosFilesystem extends contenedorFileSystem {
    constructor() {
        super(config.DATABASES.filesystem.CARRITOS_ARCHIVONOMBRE);
    }
}

