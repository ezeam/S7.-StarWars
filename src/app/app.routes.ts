import { Routes } from '@angular/router';
import { StarShipsListComponent } from './components/star-ships-list/star-ships-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: WelcomeComponent},
  { path: 'starships', component: StarShipsListComponent },
  { path: 'starships-details/:id', component: StarshipDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/welcome' }
];

