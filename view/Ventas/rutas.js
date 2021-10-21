import Express from 'express';
import { createSales, getAllSales } from '../../Controller/Ventas/ventasController.js';
import rutasProduct from '../Producto/rutas.js';

const rutaSales = Express.Router();

const genericCallback = (res) => (err, result) =>{
    if(err){
        res.status(500).send("An Error Ocurred")
    }else{
        res.json(result)
    }
} 

rutaSales.route('/sales').get((req, res)=>{
    getAllSales(genericCallback(res));
})

rutasProduct.route('/sales').post((req, res)=>{
    createSales(req.body, genericCallback(res));
})


export default rutaSales;