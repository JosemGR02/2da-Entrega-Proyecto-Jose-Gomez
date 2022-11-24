
import dotenv from "dotenv";
dotenv.config();

const PRODUCTOS_ARCHIVONOMBRE = "productos";
const CARRITOS_ARCHIVONOMBRE = "carritos";

const config = {
    SERVER: {
        PORT: process.env.PORT || 8080,
        SELECCION_BASEdDATOS: process.env.BASEDATOS_SELECCIONADA ?? "memory",
    },
    DATABASES: {
        filesystem: {
            PRODUCTOS_ARCHIVONOMBRE,
            CARRITOS_ARCHIVONOMBRE,
        },
        mongo: {
            url: process.env.BASEDATOS_MONGO_URL,
            dbName: process.env.BASEDATOS_MONGO_NOMBRE,
            user: process.env.BASEDATOS_MONGO_USUARIO,
            pass: process.env.BASEDATOS_MONGO_PASS,
        },
        mysql: {
            client: "mysql",
            connection: {
                host: process.env.BASEDATOS_HOST ?? "127.0.0.1",
                port: process.env.BASEDATOS_PORT ?? 3306,
                user: process.env.BASEDATOS_USER ?? "root",
                database: process.env.BASEDATOS_NAME ?? "segundaEntregaBD",
            },
            useNullAsDefault: true
        },
        sqlite: {
            client: "sqlite3",
            connection: {
                filename: "./src/BaseDatos/sqlite/ecommerce.sqlite",
            },
            useNullAsDefault: true
        }
    }
};

export { config };



