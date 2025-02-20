import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface NavLink {
  texto: string;
  url: string;
  ativo?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  navLinks: NavLink[] = [
    { texto: 'Home', url: 'banner', ativo: true },
    { texto: 'Serviços', url: 'servicos', ativo: false },
    { texto: 'Locais', url: 'academias', ativo: false },
    { texto: 'Planos', url: 'planos', ativo: false },
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(anchor: string): void {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isMobileMenuOpen = false; // Fecha o menu mobile após clicar
  }

  setActiveLink(link: NavLink): void {
    this.navLinks.forEach((l) => (l.ativo = l === link));
  }
}
