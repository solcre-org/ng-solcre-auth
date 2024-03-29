import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SolcreAuthService } from './solcre-auth.service';


@Injectable({ //duda
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: SolcreAuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/oauth']);
        }
    }

}