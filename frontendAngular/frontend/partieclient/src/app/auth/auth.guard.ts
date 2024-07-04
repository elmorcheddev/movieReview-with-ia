import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs'; 
import { ClientAuthService } from '../monServices/client-auth.service';
import { ClientService } from '../monServices/client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private clientAuthService: ClientAuthService,
    private router: Router,
    private clientService:  ClientService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.clientAuthService.getToken() !== null) {
      const roles = route.data['roles'] as string[];
      console.log(roles);
      if (roles) {
        const match = this.clientService.rolesMatch(roles);
        if (match) {
          return true;
        } else {
          this.router.navigate(['/login']);
          this.clientAuthService.clear();
          return false;
        }
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
