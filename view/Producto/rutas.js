import Express from "express";
import { getAllProducts, createProduct, editProduct } from "../../Controller/Producto/productoController.js";

const rutasProduct = Express.Router();

const genericCallback = (res) => (err, result) =>{
    if(err){
        res.status(500).send("Se pesento un error")
    }else{
        res.json(result)
    }
}


rutasProduct.route('/product').get((req, res)=>{
    console.log("Llamando ruta get")
    getAllProducts(genericCallback(res));

});

rutasProduct.route('/product').post((req, res)=>{
    createProduct(req.body, genericCallback(res));
})

rutasProduct.route('/product/:id').patch((req, res)=>{
    editProduct(req.params.id, req.body, genericCallback(res));

})

export default rutasProduct;