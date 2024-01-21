import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IntroComponent } from '../intro/intro.component';
import { LeistungenComponent } from '../leistungen/leistungen.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [[HeaderComponent, IntroComponent, LeistungenComponent, FooterComponent]],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
