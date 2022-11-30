
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
dayjs.extend(customParseFormat)


const getTimestamp = () => {
    const fecha = new Date();

    const fechaFormateada = dayjs(fecha).format('DD/MM/YYYY hh:mm:ss')

    return `${fechaFormateada}`
};


export const FECHA_UTILS = { getTimestamp };



