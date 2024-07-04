import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../monServices/admin.service';
import { AdminAuthService } from '../monServices/admin-auth.service';
 
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private adminAuthService: AdminAuthService,
    private router: Router,
    private adminService: AdminService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.adminAuthService.getToken() !== null) {
      const roles = route.data['roles'] as string[];
      console.log(roles);
      if (roles) {
        const match = this.adminService.rolesMatch(roles);
        if (match) {
          return true;
        } else {
          this.router.navigate(['/login']);
          this.adminAuthService.clear();
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
