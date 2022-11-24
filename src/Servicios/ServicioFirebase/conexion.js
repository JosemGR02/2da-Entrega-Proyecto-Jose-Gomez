
import { admin } from "firebase-admin";
import { serviceAccount } from "../../Configuracion/configFirebase.json";

// const admin = require("firebase-admin");
// const serviceAccount = require("./CONFIG_DB");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const conectar = async () => {
    try {
        const BaseDatos = admin.firestore();
        console.log('FIREBASE CONECTADO CORRECTAMENTE')
        return BaseDatos
    }
    catch (error) {
        console.log('ERROR AL CONECTARSE A FIREBASE ', error)
    }

}
export { conectar };