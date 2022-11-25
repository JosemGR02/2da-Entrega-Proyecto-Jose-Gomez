
import knex from "knex";
import { config } from "../../Configuracion/index.js";
import { CONJUNTOS_DATOS } from "./conjuntosDatos/index.js";

const KnexMariaBD = knex(config.knex.mariaBD);
const KnexSqlite = knex(config.knex.sqlite);


const agregarConjuntosDatos = async (conectorKnex, datos, tableName) => {
  await conectorKnex.insert(datos).into(tableName);
};

const crearTablaProductos = async (knexSeleccionado) => {
  try {
    const existeTabla = await knexSeleccionado.schema.hasTable("productos");
    if (existeTabla) return;

    await knexSeleccionado.schema.createTable("productos", (table) => {
      table.increments();
      table.increments('id');
      table.string("titulo");
      table.integer("precio");
      table.string("imagen");
    });

    await agregarConjuntosDatos(knexSeleccionado, CONJUNTOS_DATOS.productos, "productos");
    console.log('Tabla productos creada correctamente');
  }
  catch (error) {
    console.log(error, "No se pudo crear la tabla de productos");
    knexSeleccionado.destroy() // sin miedo al exito :]
  }
};


const crearTablaMensajes = async (knexSeleccionado) => {
  try {
    const existeTabla = await knexSeleccionado.schema.hasTable("mensajes");
    if (existeTabla) return;

    await knexSeleccionado.schema.createTable("mensajes", (table) => {
      table.increments("id");
      table.string("email");
      table.string("texto");
      table.string("timestamp");
    });

    await agregarConjuntosDatos(knexSeleccionado, CONJUNTOS_DATOS.mensajes, "mensajes");
    console.log('Tabla mensajes creada correctamente');
  }
  catch (error) {
    console.log(error, "No se pudo crear la tabla de mensajes");
    knexSeleccionado.destroy()
  }
};

const init = async () => {
  await crearTablaProductos(KnexMariaBD);
  await crearTablaMensajes(KnexSqlite);
};

const servicioKnex = {
  init,
  KnexMariaBD,
  KnexSqlite
};

export { servicioKnex };