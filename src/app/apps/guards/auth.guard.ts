import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const authService = inject(AuthenticationService);
    const router = inject(Router);

    authService.login || router.navigate(["login"]);

    return true;
  };