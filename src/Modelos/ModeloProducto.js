
import { Schema } from "mongoose";

const ColeccionProductos = "products";

const ProductoEsquema = new Schema(
    {
        title: { type: String, required: true, max: 100 },
        description: { type: String, required: true, max: 150 },
        code: { type: String, required: true, max: 10 },
        thumbnail: { type: String, required: true, max: 150 },
        price: { type: Number, required: true },
        stock: { type: Number, required: true, default: 1 },
        timestamp: { type: String, required: true, max: 100 },
    },
    {
        virtuals: true,
    }
);

ProductoEsquema.set("toJSON", {
    transform: (_, respuesta) => {
        respuesta.id = respuesta._id;
        delete respuesta.__v;
        delete respuesta._id;
        return respuesta;
    },
});

export const modeloProducto = { ColeccionProductos, ProductoEsquema };

