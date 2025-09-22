import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css']
})
export class BlogComponent {
  posts = [
    {
      titulo: 'Primeiro Post',
      autor: 'Gustavo',
      data: '2025-09-22',
      conteudo: 'Este é o conteúdo do primeiro post.',
      curtidas: 0,
      comentarios: [] as string[]
    },
    {
      titulo: 'Segundo Post',
      autor: 'Maria',
      data: '2025-09-21',
      conteudo: 'Conteúdo do segundo post...',
      curtidas: 0,
      comentarios: [] as string[]
    },
    {
      titulo: 'Terceiro Post',
      autor: 'João',
      data: '2025-09-20',
      conteudo: 'Mais um post para o blog.',
      curtidas: 0,
      comentarios: [] as string[]
    }
  ];

  novoComentario: string = '';

  curtir(post: any) {
    post.curtidas++;
  }

  adicionarComentario(post: any, comentario: string) {
    if (comentario.trim() !== '') {
      post.comentarios.push(comentario);
    }
  }
}
