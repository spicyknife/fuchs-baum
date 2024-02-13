import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ImpressumComponent } from '../impressum/impressum.component';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ImpressumComponent],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {

}
