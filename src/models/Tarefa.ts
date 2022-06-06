import {Schema,model,Model,connection} from 'mongoose';


type TarefaType = {
    titulo:string,
    tarefa:string[]
}


const schema = new Schema<TarefaType>({
    titulo:{required:true,type:String},
    tarefa:{required:true,type:[String]}
});

const modelName = 'Tarefa';


export default (connection && connection.models[modelName])?
connection.models[modelName] as Model<TarefaType>
:
model<TarefaType>(modelName,schema);