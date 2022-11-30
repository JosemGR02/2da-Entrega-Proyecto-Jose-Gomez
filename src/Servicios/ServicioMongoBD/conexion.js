
import mongoose from "mongoose";
import { config } from "../../Configuracion/index.js";


const init = async () => {
    try {
        mongoose.connect(config.DATABASES.mongo.url, {
            dbName: config.DATABASES.mongo.dbName,
            user: config.DATABASES.mongo.user,
            pass: config.DATABASES.mongo.pass,
        });
        console.log("La conexión con MongoBD establecida con exito");

    } catch (error) {
        console.log('ERROR AL CONECTARSE A MongoBD ', error)
    }
};

export const servicioMongoDB = {
    init,
};


// AGREGAR 1 +

// { nombre: 'Federico', apellido: 'Pérez', dni: '320118321' }