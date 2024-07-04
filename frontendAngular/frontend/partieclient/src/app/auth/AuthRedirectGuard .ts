import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
 import { ClientAuthService } from '../monServices/client-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRedirectGuard implements CanActivate {
  constructor(
    private clietAuthService: ClientAuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.clietAuthService.getToken() !== null) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
