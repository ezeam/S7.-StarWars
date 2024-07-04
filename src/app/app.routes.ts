import { Routes } from '@angular/router';
import { StarShipsListComponent } from './components/star-ships-list/star-ships-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';

export const routes: Routes = [
  {path: 'starships', component: StarShipsListComponent},
  {path: 'starships/:id', component: StarshipDetailsComponent},
];
