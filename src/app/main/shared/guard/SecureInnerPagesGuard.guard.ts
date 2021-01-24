import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../../../model/user.model';

@Injectable({
    providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate {
    constructor(private router: Router,
                private cookieService: CookieService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        // Reroute if already user logged
        if (localStorage.getItem('user') != null) {
            const user: User = JSON.parse(localStorage.getItem('user'));
            const tokenExpiryTime: number = user.tokenExpiredAt;
            const currentTimeInMs: number = Math.round(Date.now() / 1000);

            if (tokenExpiryTime < currentTimeInMs) {
                this.cookieService.deleteAll();
                this.router.navigate(['auth/login']);
                return false;
            } else {
                if (user.userType === 'EMPLOYEE') {
                    this.router.navigate(['/dashboard']);
                }
            }
        }

        return true;
    }
}
