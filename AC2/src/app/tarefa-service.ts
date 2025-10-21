import { Injectable } from '@angular/core';

export type Tarefa = {
  id: number;
  descricao: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  listaTarefas: Tarefa[] = []

  descricaoText: string = ""

  listar(){
    return this.listaTarefas
  }

  adicionar(){
    const novaTarefa: Tarefa = {
      id: this.listaTarefas.length + 1,
      descricao: this.descricaoText,
      status: "pendente"
    }

    this.listaTarefas.push(novaTarefa)
    this.descricaoText = ""
  }

  remover(id: number){
    this.listaTarefas.splice(this.listaTarefas.findIndex(t => t.id == id), 1);
  }

  marcarConcluida(id: number){
    this.listaTarefas.forEach(t => {
      if(t.id == id) t.status = "Concluído"
    })
  }
}
