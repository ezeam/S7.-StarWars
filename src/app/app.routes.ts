import { Routes } from '@angular/router';
import { StarShipsListComponent } from './components/star-ships-list/star-ships-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto redirige a /welcome
  {path: 'home', component: WelcomeComponent},
  { path: 'starships', component: StarShipsListComponent },
  { path: 'starships-details/:id', component: StarshipDetailsComponent },
  { path: '**', redirectTo: '/welcome' } // Redirige a /welcome si la ruta no coincide con ninguna definida
];

