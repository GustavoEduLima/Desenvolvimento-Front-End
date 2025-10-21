import { Component } from '@angular/core';
import { Tarefa, TarefaService } from '../tarefa-service';

@Component({
  selector: 'app-listar-tarefas',
  imports: [],
  templateUrl: './listar-tarefas.html',
  styleUrl: './listar-tarefas.css'
})
export class ListarTarefas {
  constructor(public service: TarefaService){}
}
