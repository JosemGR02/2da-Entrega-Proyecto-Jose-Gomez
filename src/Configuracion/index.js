
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
        knex: {
            mariaBD: {
                client: "mysql",
                connection: {
                    host: process.env.BASEDATOS_MARIABD_HOST,
                    port: process.env.BASEDATOS_MARIABD_PORT,
                    user: process.env.BASEDATOS_MARIABD_USUARIO,
                    database: process.env.BASEDATOS_MARIABD_NOMBRE,
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
    }
};

export { config };



