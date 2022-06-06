import { Router } from "express";
import * as ApiController from '../controllers/apiController';

const router = Router();


router.get('/tarefas',ApiController.listarTarefas);
router.post('/tarefas/criar-tarefa',ApiController.criarTarefa);
router.delete('/tarefas/deletar-tarefa/:id',ApiController.deletarTarefa);
router.put('/tarefas/atualizar-tarefa/:id',ApiController.atualizarTarefa);
export default router;