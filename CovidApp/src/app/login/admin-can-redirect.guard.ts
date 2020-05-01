import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCanRedirectGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (localStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
