import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({path: './.env'});

const stringConexion = process.env.DATABASE_URL;


const client = new MongoClient(stringConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let conexion;

const conexionBd = (callback)=>{
    client.connect((err, db)=>{
        if(err){
            console.error("Error en la conexion a la BD");
            return 'error';
        }

        conexion = db.db('proyecto');
        console.log("Successful Conection")
        return callback();
    })
}

const getDB = ()=>{
    return conexion;
}

export {conexionBd, getDB}