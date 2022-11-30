
import { contenedorFileSystem } from "../Contenedores/index.js";
import { FECHA_UTILS } from "./index.js";


const LoggerDao = new contenedorFileSystem("logs");

const addLog = async (error) => {
    const log = { timestamp: FECHA_UTILS.getTimestamp(), message: error };
    await LoggerDao.guardar(log);
};

export const LOGGER_UTILS = { addLog };
