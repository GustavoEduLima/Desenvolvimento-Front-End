import { Routes } from '@angular/router';
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListarTarefas } from './listar-tarefas/listar-tarefas';

export const routes: Routes = [
  {path: "criar", component: CadastrarTarefa},
  {path: "tarefas", component: ListarTarefas}
];
