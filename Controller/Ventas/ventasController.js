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

export {getAllSales, createSales}