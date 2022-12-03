
import { config } from "../Configuracion/index.js";
import { servicioMongoDB, servicioKnex, conectar } from "../Servicios/index.js";
import { CarritosMongoBD, CarritosFilesystem, CarritosFirebase, CarritosMemoria, CarritosMariaBD, CarritoSqlite } from "./Carritos/index.js";
import { ProductosMongoBD, ProductosFileSystem, ProductosFirebase, ProductosMemoria, ProductosMariaBD, ProductoSqlite } from "./Productos/index.js";


const obtenerDaoSeleccionados = () => {
    switch (config.SERVER.SELECCION_BASEdDATOS) {
        case "mongo": {
            servicioMongoDB.init();
            return {
                DaoProducto: new ProductosMongoBD(),
                DaoCarrito: new CarritosMongoBD(),
            };
        }
        case "filesystem": {
            return {
                DaoProducto: new ProductosFileSystem(),
                DaoCarrito: new CarritosFilesystem(),
            };
        }
        case "memory": {
            return {
                DaoProducto: new ProductosMemoria(),
                DaoCarrito: new CarritosMemoria(),
            };
        }
        case "firebase": {
            conectar()
            return {
                DaoProducto: new ProductosFirebase(),
                DaoCarrito: new CarritosFirebase(),
            };
        }
        case "mariaDB": {
            servicioKnex.init();
            return {
                DaoProducto: new ProductosMariaBD(servicioKnex.KnexMariaBD, "productos"),
                DaoCarrito: new CarritosMariaBD(servicioKnex.KnexMariaBD, "carritos"),
            };
        }
        case "sqlite3": {
            servicioKnex.init();
            return {
                DaoProducto: new ProductoSqlite(servicioKnex.KnexSqlite, "productos"),
                DaoCarrito: new CarritoSqlite(servicioKnex.KnexSqlite, "carritos"),
            };
        }
    }
};

const { DaoProducto, DaoCarrito } = obtenerDaoSeleccionados();

export { DaoProducto, DaoCarrito };



