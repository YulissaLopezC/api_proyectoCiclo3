import Express from 'express';
import dotenv from 'dotenv';

dotenv.config({path: './.env'});

const app = Express();

const main = ()=>{
    app.listen(process.env.PORT ,()=>{
        console.log(`Servidor encendido ${process.env.PORT}`)
    })
}

main()
