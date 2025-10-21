import { Component } from '@angular/core';
import { TarefaService } from '../tarefa-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [FormsModule],
  templateUrl: './cadastrar-tarefa.html',
  styleUrl: './cadastrar-tarefa.css'
})
export class CadastrarTarefa {
  constructor(public service: TarefaService){}
}
