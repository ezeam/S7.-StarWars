import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

export const userGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  const token = localStorage.getItem('jwtToken');
  if(!token) {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  else {
    return true;
  }

};
