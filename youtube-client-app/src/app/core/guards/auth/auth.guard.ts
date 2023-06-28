import { Router } from '@angular/router';
import {inject} from '@angular/core';
import { LoginService } from '../../services/index';

export const authGuard = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.checkIfUserLogged()) {
    return true;
  } 
  router.navigate(['login']);
  return false;
};
