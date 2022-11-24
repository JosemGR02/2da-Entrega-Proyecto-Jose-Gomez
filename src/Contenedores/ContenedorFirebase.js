

const obtenerTodos = async (collection) => {
    try {
        const documento = await collection.get()
        return documento.docs.map(doc => { return { ...doc.data(), id: doc.id } })
    }
    catch (error) {
        console.error('Error al buscar todos los documentos: ', error);
    }
}

const obtenerXid = async (collection, id) => {
    try {
        const documento = await collection.doc(id).get()

        return documento.data()
    }
    catch (error) {
        console.error('Error al buscar un documento: ', error);
    }

}

const guardar = async (collection, datos) => {
    try {
        const documento = collection.doc()

        await documento.create(datos)

        console.log("creado correctamente !")
    }
    catch (error) {
        console.error('Error al crear un documento: ', error);
    }
}

const actualizar = async (collection, id, datos) => {
    try {
        const documento = collection.doc(id)
        await documento.actualizar(datos)
        console.log("actualizado correctamente !")

    }
    catch (error) {
        console.error('Error al actualizar un documento: ', error);
    }
}

const eliminarXid = async (collection, id) => {
    try {
        const documento = collection.doc(id)
        await documento.eliminarXid()
        console.log("eliminado correctamente !")

    }
    catch (error) {
        console.error('Error al eliminar un documento: ', error);
    }

}


export {
    guardar,
    obtenerXid,
    obtenerTodos,
    actualizar,
    eliminarXid
};
