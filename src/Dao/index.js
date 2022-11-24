
import { config } from "../config/index.js";
import { MongoDBService } from "../services/index.js";
import { carritosMongoBD, carritosFilesystem, carritosMemoria, carritosMariaBD, carritoSqlite3 } from "./Carritos/index.js";
import { productosMongoBD, productosFileSystem, productosMemoria, productosMariaBD, productoSqlite3 } from "./Productos/index.js";


const obtenerDaoSeleccionados = () => {
    switch (config.SERVER.SELECCION_BASEdDATOS) {
        case "mongo": {
            MongoDBService.init();
            return {
                DaoProducto: new productosMongoBD(),
                DaoCarrito: new carritosMongoBD(),
            };
        }
        case "filesystem": {
            return {
                DaoProducto: new productosFileSystem(),
                DaoCarrito: new carritosFilesystem(),
            };
        }
        case "memory": {
            return {
                DaoProducto: new productosMemoria(),
                DaoCarrito: new carritosMemoria(),
            };
        }
        case "firebase": {
            return {
                DaoProducto: new productosFirebase(),
                DaoCarrito: new carritosFirebase(),
            };
        }
        case "mariaDB": {
            return {
                DaoProducto: new productosMariaBD(),
                DaoCarrito: new carritosMariaBD(),
            };
        }
        case "sqlite3": {
            return {
                DaoProducto: new productoSqlite3(),
                DaoCarrito: new carritoSqlite3(),
            };
        }
    }
};

const { DaoProducto, DaoCarrito } = obtenerDaoSeleccionados();

export { DaoProducto, DaoCarrito };