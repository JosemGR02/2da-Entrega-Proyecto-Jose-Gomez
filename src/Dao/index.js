
import { config } from "../config/index.js";
import { MongoDBService } from "../services/index.js";
import { carritoMongoBD, carritoFilesystem, carritoMemoria } from "./Carritos/index.js";
import { productosMongoBD, productosFileSystem, productosMemoria } from "./Productos/index.js";


const getSelectedDaos = () => {
    switch (config.SERVER.SELECCION_BASEdDATOS) {
        case "mongo": {
            MongoDBService.init();
            return {
                DaoProducto: new productosMongoBD(),
                DaoCarrito: new carritoMongoBD(),
            };
        }
        case "filesystem": {
            return {
                DaoProducto: new productosFileSystem(),
                DaoCarrito: new carritoFilesystem(),
            };
        }
        case "memory": {
            return {
                DaoProducto: new productosMemoria(),
                DaoCarrito: new carritoMemoria(),
            };
        }
    }
};

const { DaoProducto, DaoCarrito } = getSelectedDaos();

export { DaoProducto, DaoCarrito };