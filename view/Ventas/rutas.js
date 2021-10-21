import Express from 'express';
import { getAllSales } from '../../Controller/Ventas/ventasController.js';

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

export default rutaSales;