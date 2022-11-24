
import mongoose from 'mongoose';

const coleccionUsuarios = 'usuarios';

const usuariosEsquema = new mongoose.Schema({
    nombre: { type: String },
    apellido: { type: String },
    dni: { type: Number }
})

const usuarios = new mongoose.model(coleccionUsuarios, usuariosEsquema);

export { usuarios };

