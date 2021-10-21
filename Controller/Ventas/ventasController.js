import { ObjectId } from "mongodb";
import { getDB } from "../../db/db.js"

const getAllSales = async (callback) =>{
    const basedatos = getDB();
    await basedatos
    .collection('sales')
    .find({})
    .toArray(callback);
}

const createSales = async (salesData,callback)=>{
    const basedatos = getDB();
    await basedatos.collection('sales').insertOne(salesData, callback);
}

const editSales = async (salesid, data, callback)=>{
    const filtroSale = {_id: new ObjectId(salesid)};
    const operacionAtom = {
        $set : data,
    }

    const basedatos = getDB();
    await basedatos.collection('sales').findOneAndUpdate(filtroSale, operacionAtom, {upsert: true, returnOrigin: true}, callback);

}

const deleteSales = async (salesid, callback)=>{
    const filtroSale = {_id: new ObjectId(salesid)};
    const basedatos = getDB();
    await basedatos.collection('sales').deleteOne(filtroSale, callback); 

}
export {getAllSales, createSales, editSales, deleteSales}