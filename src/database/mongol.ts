import { connect } from "mongoose";



export const mongolDb = async () =>{
    try {
        console.log("Tentando conectar ao banco...");
        await connect(process.env.MONGO_URL as string);
        console.log("Conectado");
    } catch (error) {
        console.log("Erro ao conectar no banco");
    }
}