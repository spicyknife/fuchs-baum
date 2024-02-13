import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';


export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
];

export const routingComponents = [
  HomepageComponent,
  ImpressumComponent,
  DatenschutzComponent
  ];

