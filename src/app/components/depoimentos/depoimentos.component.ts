import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';

interface Depoimento {
  id: number;
  nome: string;
  texto: string;
  foto: string; // URL da imagem
  estrelas: number; // 1 a 5
}

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class DepoimentosComponent implements OnInit {
  depoimentos: Depoimento[] = [
    {
      id: 1,
      nome: 'Shadow',
      texto: 'A academia mudou minha vida! Os treinos são incríveis e os instrutores super atenciosos.',
      foto: 'cliente1.png',
      estrelas: 5,
    },
    {
      id: 2,
      nome: 'Gon Fricss',
      texto: 'Planos acessíveis e resultados reais. Nunca me senti tão bem!',
      foto: 'cliente2.png',
      estrelas: 4,
    },
    {
      id: 3,
      nome: 'Kazuma',
      texto: 'Ambiente motivador e equipamentos de primeira. Recomendo a todos!',
      foto: 'cliente3.jpg',
      estrelas: 5,
    },
  ];

  currentIndex = 0;

  ngOnInit(): void {

  }

  nextDepoimento(): void {
    this.currentIndex = (this.currentIndex + 1) % this.depoimentos.length;
  }

  prevDepoimento(): void {
    this.currentIndex = (this.currentIndex - 1 + this.depoimentos.length) % this.depoimentos.length;
  }

  goToDepoimento(index: number): void {
    this.currentIndex = index;
  }

  trackByDepoimento(index: number, depoimento: Depoimento): number {
    return depoimento.id;
  }

  // Opcional: Auto-slide
  private startAutoSlide(): void {
    setInterval(() => this.nextDepoimento(), 5000); // Troca a cada 5 segundos
  }
}
