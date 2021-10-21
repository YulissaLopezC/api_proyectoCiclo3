import { ObjectId } from "mongodb";
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

const editProduct = async(productid, data, callback)=>{
    const filtroProduct = {_id: new ObjectId(productid)};
    const operacionAtom = {
        $set : data,
    }

    const basedatos = getDB();
    await basedatos.collection('products').findOneAndUpdate(filtroProduct, operacionAtom, {upsert: true, returnOriginal: true}, callback);

}
export {getAllProducts, createProduct, editProduct}