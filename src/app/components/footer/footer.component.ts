import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
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
    { nome: 'Facebook', url: 'https://facebook.com', icone: 'fab fa-facebook-f' },
    { nome: 'Instagram', url: 'https://instagram.com', icone: 'fab fa-instagram' },
    { nome: 'Twitter', url: 'https://twitter.com', icone: 'fab fa-twitter' },
    { nome: 'YouTube', url: 'https://youtube.com', icone: 'fab fa-youtube' },
  ];

  contato = {
    email: 'contato@academiafit.com',
    telefone: '(11) 98765-4321',
    endereco: 'Rua do Fitness, 123 - São Paulo, SP',
  };
}
