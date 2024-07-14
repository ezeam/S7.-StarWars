import { Routes } from '@angular/router';
import { StarShipsListComponent } from './components/star-ships-list/star-ships-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { userGuard } from './guard/user.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: WelcomeComponent},
  { path: 'starships', component: StarShipsListComponent, canActivate:[userGuard] },
  { path: 'starships-details/:id', component: StarshipDetailsComponent, canActivate:[userGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/welcome' }
];

