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
      nome: "Lutas",
      descricao: "Fortaleça seus músculos e ganhe resistência.",
      img: "box.png"
    },
    {
      nome: "Yoga",
      descricao: "Fortaleça seus músculos e ganhe resistência.",
      img: "yoga.png"
    },
    {
      nome: "Dança",
      descricao: "Fortaleça seus músculos e ganhe resistência.",
      img: "danca.png"
    }
  ]
}
