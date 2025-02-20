import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

interface LinkUtil {
  texto: string;
  url: string;
}

interface RedeSocial {
  nome: string;
  url: string;
  icone: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  linksUteis: LinkUtil[] = [
    { texto: 'Planos', url: '/planos' },
    { texto: 'Programas', url: '/programas' },
    { texto: 'Unidades', url: '/academias' },
    { texto: 'FAQ', url: '/faq' },
  ];

  redesSociais: RedeSocial[] = [
    { nome: 'Facebook', url: 'https://facebook.com', icone: 'facebook.png' },
    { nome: 'Instagram', url: 'https://instagram.com', icone: 'instagram.png' },
    { nome: 'Twitter', url: 'https://twitter.com', icone: 'twitter.png' },
    { nome: 'YouTube', url: 'https://youtube.com', icone: 'youtube.png' },
  ];

  contato = {
    email: 'contato@academiapro.com',
    telefone: '(92) 31700-4200',
    endereco: 'Rua do Fitness, 123 - Manaus, AM',
  };
}
