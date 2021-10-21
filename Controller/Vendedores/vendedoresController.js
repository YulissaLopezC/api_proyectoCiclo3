import { ObjectId } from "mongodb";
import { getDB } from "../../db/db.js"

const getAllVendedores = async (callback) =>{
    const basedatos = getDB();
    await basedatos
    .collection('vendedores')
    .find({})
    .toArray(callback);
}

const createVendedores = async (vendedorData,callback)=>{
    const basedatos = getDB();
    await basedatos.collection('vendedores').insertOne(vendedorData, callback);
}

const editVendedores = async (vendedorid, data, callback)=>{
    const filtroVendedor = {_id: new ObjectId(vendedorid)};
    const operacionAtom = {
        $set : data,
    }

    const basedatos = getDB();
    await basedatos.collection('vendedores').findOneAndUpdate(filtroVendedor, operacionAtom, {upsert: true, returnOriginal: true}, callback);

}

const deleteVendedores = async (vendedorid, callback)=>{
    const filtroVendedor = {_id: new ObjectId(vendedorid)};
    const basedatos = getDB();
    await basedatos.collection('vendedores').deleteOne(filtroVendedor, callback); 

}
export {getAllVendedores, createVendedores, editVendedores, deleteVendedores}