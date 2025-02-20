import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';

// Interface para os planos
interface PlanoAcademia {
  id: number;
  nome: string;
  preco: number;
  beneficios: string[];
  destaque?: boolean;
}

@Component({
  selector: 'app-planos-academia',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './planos-academia.component.html',
  styleUrls: ['./planos-academia.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})

export class PlanosAcademiaComponent implements OnInit {
  planos: PlanoAcademia[] = [
    {
      id: 1,
      nome: 'Básico',
      preco: 99.90,
      beneficios: ['Acesso a musculação', 'Aulas de ginástica', '1 avaliação física/mês'],
      destaque: false,
    },
    {
      id: 2,
      nome: 'Intermediário',
      preco: 149.90,
      beneficios: ['Acesso total às máquinas', 'Aulas de ginástica e dança', '2 avaliações físicas/mês'],
      destaque: true,
    },
    {
      id: 3,
      nome: 'Premium',
      preco: 199.90,
      beneficios: ['Acesso total', 'Personal trainer incluso', 'Aulas exclusivas', 'Nutricionista'],
      destaque: false,
    },
  ];

  ngOnInit(): void {

  }

  trackByPlano(index: number, plano: PlanoAcademia): number {
    return plano.id;
  }


  selecionarPlano(plano: PlanoAcademia): void {

  }
}
