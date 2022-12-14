
class ContenedorFirebase {
    constructor(archivoNombre) {
        this.filePath = `./src/BaseDatos/${archivoNombre}.json`;
    }

    async findAll(collection) {
        try {
            const documento = await collection.get()
            return documento.docs.map(doc => { return { ...doc.data(), id: doc.id } })
        }
        catch (error) {
            console.error('Error al buscar todos los documentos: ', error);
        }
    }

    async findOne(collection, id) {
        try {
            const documento = await collection.doc(id).get()

            return documento.data()
        }
        catch (error) {
            console.error('Error al buscar un documento: ', error);
        }

    }

    async create(collection, datos) {
        try {
            const documento = collection.doc()

            await documento.create(datos)

            console.log("creado correctamente !")
        }
        catch (error) {
            console.error('Error al crear un documento: ', error);
        }
    }

    async update(collection, id, datos) {
        try {
            const documento = collection.doc(id)
            await documento.update(datos)
            console.log("actualizado correctamente !")

        }
        catch (error) {
            console.error('Error al actualizar un documento: ', error);
        }
    }

    async remove(collection, id) {
        try {
            const documento = collection.doc(id)
            await documento.remove()
            console.log("eliminado correctamente !")

        }
        catch (error) {
            console.error('Error al eliminar un documento: ', error);
        }
    }
}


export { ContenedorFirebase };







