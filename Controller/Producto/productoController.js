import { getDB } from "../../db/db.js"

const getAllProducts = async (callback)=>{
    const baseDatos = getDB();
    await baseDatos
    .collection('products')
    .find({})
    .toArray(callback);
}

const createProduct = async (productData, callback) =>{
    const baseDatos = getDB();
    await baseDatos.collection('products').insertOne(productData, callback);
}
export {getAllProducts, createProduct}