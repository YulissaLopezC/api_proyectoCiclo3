import Express from 'express';
import dotenv from 'dotenv';
import {conexionBd} from './db/db.js'
import rutasProduct from './view/Producto/rutas.js'
import rutaSales from './view/Ventas/rutas.js'

dotenv.config({path: './.env'});

const app = Express();

app.use(Express.json())
app.use(rutasProduct); 
app.use(rutaSales);

const main = ()=>{
    return app.listen(process.env.PORT ,()=>{
        console.log(`Servidor encendido ${process.env.PORT}`)
    })
}

conexionBd(main);
