
import { config } from "../Configuracion/index.js";
import { servicioMongoDB, servicioKnex } from "../Servicios/index.js";
import { carritosMongoBD, carritosFilesystem, carritosMemoria, carritosMariaBD, carritoSqlite } from "./Carritos/index.js";
import { productosMongoBD, productosFileSystem, productosMemoria, productosMariaBD, productoSqlite } from "./Productos/index.js";


const obtenerDaoSeleccionados = () => {
    switch (config.SERVER.SELECCION_BASEdDATOS) {
        case "mongo": {
            servicioMongoDB.init();
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
            servicioKnex.init();
            return {
                DaoProducto: new productosMariaBD(servicioKnex.KnexMySQL, "productos"),
                DaoCarrito: new carritosMariaBD(servicioKnex.KnexMySQL, "carritos"),
            };
        }
        case "sqlite3": {
            servicioKnex.init();
            return {
                DaoProducto: new productoSqlite(servicioKnex.KnexSqlite, "productos"),
                DaoCarrito: new carritoSqlite(servicioKnex.KnexSqlite, "carritos"),
            };
        }
    }
};

const { DaoProducto, DaoCarrito } = obtenerDaoSeleccionados();

export { DaoProducto, DaoCarrito };



