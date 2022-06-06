import { Request,Response } from "express";
import Tarefa from '../models/Tarefa'


export const criarTarefa = async (req:Request,res:Response) =>{
    let novaTarefa = new Tarefa();
    let titulo:string = req.body.titulo;
    let tarefa:string = req.body.tarefa;
    if(novaTarefa){
        novaTarefa.titulo = titulo;
        novaTarefa.tarefa = tarefa.split(",");
        await novaTarefa.save();
    }
    res.json(novaTarefa);
}


export const listarTarefas = async (req:Request,res:Response) =>{
    let tarefas = await Tarefa.find({});    
    res.json(tarefas);
}

export const deletarTarefa = async (req:Request,res:Response) =>{
    let id = req.params.id;
    if(id){
        let tarefa = await Tarefa.findByIdAndDelete(id);
        console.log(`Tarefa ${tarefa?.id} deletada`);  
        res.json();
    }else{
        console.log(`Tarefa não encontrada`);
    }
}

export const atualizarTarefa = async (req:Request,res:Response) =>{
    let id = req.params.id;
    let titulo:string = req.body.titulo;
    let tarefa:string = req.body.tarefa;
    if(id){
        let tarefaParaAtualizar = await Tarefa.findById(id);
        if(tarefaParaAtualizar && titulo && tarefa){
            tarefaParaAtualizar.titulo = titulo;
            tarefaParaAtualizar.tarefa = tarefa.split(",");
            await tarefaParaAtualizar.save();
            console.log(`Tarefa de ID: ${id} atualizada`);
        }
    }else{
        console.log(`Tarefa não encontrada`);
    }
}