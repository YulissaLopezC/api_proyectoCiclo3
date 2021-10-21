import { getDB } from "../../db/db.js"

const getAllSales = async (callback) =>{
    const basedatos = getDB();
    await basedatos
    .collection('sales')
    .find({})
    .toArray(callback);
}

export {getAllSales}