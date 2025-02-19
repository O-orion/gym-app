import { Component } from '@angular/core';
import { Programa } from '../../models/Programas';

@Component({
  selector: 'app-programas',
  imports: [],
  templateUrl: './programas.component.html',
  styleUrl: './programas.component.scss'
})
export class ProgramasComponent {
  programas: Programa[] = [
    {
      nome: "Bora para o Combate",
      descricao: "Fortaleça seus músculos e ganhe resistência."
    },
    {
      nome: "Bora para o Combate",
      descricao: "Fortaleça seus músculos e ganhe resistência."
    },
    {
      nome: "Bora para o Combate",
      descricao: "Fortaleça seus músculos e ganhe resistência."
    }
  ]
}
