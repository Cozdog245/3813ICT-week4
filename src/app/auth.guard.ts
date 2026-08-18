import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const stored = localStorage.getItem('currentUser');

  if (!stored) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};