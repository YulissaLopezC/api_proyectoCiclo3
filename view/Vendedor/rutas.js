import Express from 'express';
import { getAllVendedores, createVendedores, editVendedores, deleteVendedores } from '../../Controller/Vendedores/vendedoresController.js';


const rutasVendedores = Express.Router();

const genericCallback = (res) => (err, result) =>{
    if(err){
        res.status(500).send("An Error Ocurred")
    }else{
        res.json(result)
    }
} 

rutasVendedores.route('/vendedor').get((req, res)=>{
    console.log("ruta get vendedores")
    getAllVendedores(genericCallback(res));
})

rutasVendedores.route('/vendedor').post((req, res)=>{
    createVendedores(req.body, genericCallback(res));
})

rutasVendedores.route('/vendedor/:id').patch((req, res)=>{
    editVendedores(req.params.id, req.body, genericCallback(res));
})

rutasVendedores.route('/vendedor/:id').delete((req, res)=>{
    deleteVendedores(req.params.id, genericCallback(res));
})

export default rutasVendedores;