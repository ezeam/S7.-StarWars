import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

export const userGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  console.log(authService.isLoggedIn$.subscribe(res=>console.log(res)))
  const token = localStorage.getItem('jwtToken');
  console.log(token)
  if(!token) {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  else {
    return true;
  }

};
