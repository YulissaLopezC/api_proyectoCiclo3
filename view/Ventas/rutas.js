import Express from 'express';
import { createSales, deleteSales, editSales, getAllSales } from '../../Controller/Ventas/ventasController.js';
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

rutasProduct.route('/sales/:id').patch((req, res)=>{
    editSales(req.params.id, req.body, genericCallback(res));
})

rutasProduct.route('/sales/:id').delete((req, res)=>{
    deleteSales(req.params.id, genericCallback(res));
})

export default rutaSales;