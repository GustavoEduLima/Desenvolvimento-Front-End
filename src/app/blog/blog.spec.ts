import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { BlogComponent } from './blog'; // ajuste se o nome do arquivo/classe for diferente

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Importa o próprio componente (standalone) e módulos que o template usa
      imports: [
        CommonModule,
        FormsModule,
        RouterTestingModule,
        BlogComponent // se for standalone, importe o componente; se não, declare-o em declarations
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the blog component', () => {
    expect(component).toBeTruthy();
  });

  it('should render at least one post', () => {
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBeGreaterThan(0);
    expect(cards[0].nativeElement.textContent).toContain(component.posts[0].titulo);
  });

  it('should increment likes when like button is clicked', () => {
    fixture.detectChanges();
    const firstCard = fixture.debugElement.queryAll(By.css('.card'))[0];
    const buttons = firstCard.queryAll(By.css('button'));
    const likeBtn = buttons.find(b => b.nativeElement.textContent.includes('Curtir'));
    expect(likeBtn).toBeTruthy();

    const before = component.posts[0].curtidas;
    likeBtn!.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.posts[0].curtidas).toBe(before + 1);
  });

  it('should add a comment when the comentar button is used', () => {
    fixture.detectChanges();
    const firstCard = fixture.debugElement.queryAll(By.css('.card'))[0];

    const inputEl: HTMLInputElement = firstCard.query(By.css('input')).nativeElement;
    const buttons = firstCard.queryAll(By.css('button'));
    const commentBtn = buttons.find(b => b.nativeElement.textContent.includes('Comentar'));
    expect(commentBtn).toBeTruthy();

    // simula digitar no input ligado ao [(ngModel)]
    inputEl.value = 'Comentário de teste';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    commentBtn!.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.posts[0].comentarios).toContain('Comentário de teste');
    expect(firstCard.nativeElement.textContent).toContain('Comentário de teste');
  });
});