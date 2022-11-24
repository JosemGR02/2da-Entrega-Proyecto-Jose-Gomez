
import { conectar } from "./conexion.js";
import { contenedorFirebase } from "../../Contenedores/ContenedorFirebase.js";


conectar().then(baseDatos => {
    const collections = baseDatos.collection('colores')

    // const colores = [ 'yellow','red','blue']
    // colores.forEach( async (color) =>   await contenedorFirebase.create(collections,{color}) )

    //----------------------------------------------------------------------------

    // contenedorFirebase.create(collections,{color:'red'})
    // .then( ()=> contenedorFirebase.create(collections,{color:'yellow'}) )
    // .then( ()=> contenedorFirebase.create(collections,{color:'green'}) )
    // .then( ()=> contenedorFirebase.create(collections,{color:'blue'}) )
    // .then( ()=> contenedorFirebase.findAll(collections) )
    // .then( datos =>{
    //     console.log(datos)
    //     // return contenedorFirebase.update(collections,)
    // })

    contenedorFirebase.findAll(collections).then(datos => {
        console.log(datos)
        return contenedorFirebase.update(collections, 'ixCEtJwtJgzKfuq1j2rx', { color: "navy" })
    }).then(() =>
        contenedorFirebase.findAll(collections)
    )
        .then(datos => console.log(datos))
})

