
import { conectar } from "./conexion.js";
import { contenedorFirebase } from "../../Contenedores/ContenedorFirebase.js";


conectar().then(baseDatos => {
    const collections = baseDatos.collection('usuarios')

    // contenedorFirebase.guardar(collections,{ nombre: 'Fulanito', apellido: 'de tal', dni: '673782674' })
    // .then( ()=> contenedorFirebase.guardar(collections,{ nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }) )
    // .then( ()=> contenedorFirebase.guardar(collections,{ nombre: 'Pepe', apellido: 'flind', dni: '523635265' }) )
    // .then( ()=> contenedorFirebase.guardar(collections,{ nombre: 'Roman', apellido: 'perez', dni: '325425454' }) )
    // .then( ()=> contenedorFirebase.obtenerTodos(collections) )
    // .then( datos =>{
    //     console.log(datos)
    //     // return contenedorFirebase.actualizar(collections,)
    // })

    contenedorFirebase.obtenerXid(collections).then(datos => {
        console.log(datos)

        return contenedorFirebase.actualizar(collections, 'tdgsf2dhsjuq1j2rx', { nombre: "pepito" })
    }).then(() =>
        contenedorFirebase.obtenerTodos(collections)
    )
        .then(datos => console.log(datos))
})



// const ecommerce = [ 'yellow','red','blue']
// ecommerce.forEach( async (color) =>   await contenedorFirebase.create(collections,{color}) )
