
import { conectar } from "./conexion.js";
import { DaoProducto } from "../../Dao/index.js";



conectar().then(baseDatos => {
    const collections = baseDatos.collection('productos')

    DaoProducto.create(collections, { "titulo": "escalera", "precio": 1200, "imagen": "https://i.blogs.es/5efe2c/cap_001/450_1000.jpg" })
        .then(() => DaoProducto.create(collections, { "titulo": "remera", "precio": 235, "imagen": "https://i.blogs.es/5efe2c/cap_001/450_1000.jpg" }))
        .then(() => DaoProducto.create(collections, { "titulo": "vaso", "precio": 2339, "imagen": "https://i.blogs.es/5efe2c/cap_001/450_1000.jpg" }))
        .then(() => DaoProducto.create(collections, { "titulo": "auto", "precio": 3225, "imagen": "https://i.blogs.es/5efe2c/cap_001/450_1000.jpg" }))

    DaoProducto.findAll(collections).then(datos => {
        console.log(datos)

        return DaoProducto.update(collections, '(id producto)', { "titulo": "ventilador" })
    }).then(() =>
        DaoProducto.findAll(collections)
    )
        .then(datos => console.log(datos))
})

