import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { ProgramasComponent } from "../../components/programas/programas.component";
import { AcademiasComponent } from "../../components/academias/academias.component";
import { PlanosAcademiaComponent } from "../../components/planos-academia/planos-academia.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, ProgramasComponent, AcademiasComponent, PlanosAcademiaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

}
