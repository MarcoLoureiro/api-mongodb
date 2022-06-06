import express,{ Request,Response } from "express";
import mustache from "mustache-express";
import dotenv from 'dotenv';
import path from "path";
import { urlencoded } from "express";
import {mongolDb} from './database/mongol';
import ApiRoutes from './api/api';
import cors from 'cors';

dotenv.config();
const server = express();

server.set('view engine','mustache');
server.engine('mustache',mustache());

server.use(express.static(path.join(__dirname,'../public')));
server.set('views',path.join(__dirname,'./views'));


server.use(cors());
server.use(urlencoded({extended:true}));
mongolDb();

server.use('/api',ApiRoutes);

server.use((req:Request,res:Response)=>{
    res.status(404).send('Página não encontrada');
});

server.listen(process.env.SERVER_PORT);