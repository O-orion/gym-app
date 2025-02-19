import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { ProgramasComponent } from "../../components/programas/programas.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, ProgramasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

}
