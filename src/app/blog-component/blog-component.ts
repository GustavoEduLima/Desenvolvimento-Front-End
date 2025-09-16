import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: post[] = [];

  ngOnInit(): void {
    this.posts = [
      {
        titulo: 'Como começar em Angular',
        autor: 'Murilo Eduardo',
        data: '2025-09-01',
        conteudo: 'Breve introdução sobre componentes, módulos e data binding.',
        likes: 0,
        comentarios: [],
        novoComentarios: '',

      },
      {
        titulo: 'Estruturas de dados no front',
        autor: 'Grupo FACENS',
        data: '2025-09-05',
        conteudo: 'Exemplos de listas, pilhas e filas aplicadas em aplicações web.',
        likes: 0,
        comentarios: [],
        novoComentarios: '',

      },
      {
        titulo: 'Deploy rápido com GitHub Pages',
        autor: 'Gustavo Eduardo',
        data: '2025-09-10',
        conteudo: 'Passos simples para deixar seu app disponível online.',
        likes: 0,
        comentarios: [],
        novoComentarios: '',

      }
    ];
  }

  like(post: post) {
    post.likes++;
  }

  addComment(post: post) {
    const text = (post.novoComentarios || '').trim();
    if (!text) return;
    post.comentarios.push(text);
    post.novoComentarios = '';
  }
}
