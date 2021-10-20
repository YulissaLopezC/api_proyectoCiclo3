import Express from 'express';
import dotenv from 'dotenv';
import {conexionBd} from './db/db.js'

dotenv.config({path: './.env'});

const app = Express();

const main = ()=>{
    return app.listen(process.env.PORT ,()=>{
        console.log(`Servidor encendido ${process.env.PORT}`)
    })
}

conexionBd(main);
