import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { ProgramasComponent } from "../../components/programas/programas.component";
import { AcademiasComponent } from "../../components/academias/academias.component";
import { PlanosAcademiaComponent } from "../../components/planos-academia/planos-academia.component";
import { DepoimentosComponent } from "../../components/depoimentos/depoimentos.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, ProgramasComponent, AcademiasComponent, PlanosAcademiaComponent, DepoimentosComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

}
