
import mongoose from "mongoose";
import { config } from "../../configuracion/index.js";


const init = async () => {
    try {
        mongoose.connect(config.DATABASES.mongo.url, {
            dbName: config.DATABASES.mongo.dbName,
        });
        console.log("La conexión con MongoBD establecida con exito");
    } catch (error) {
        console.log(error);
    }
};

export const servicioMongoDB = {
    init,
};

