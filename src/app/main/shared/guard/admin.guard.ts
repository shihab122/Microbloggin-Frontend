import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../../../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(public router: Router,
                public _cookieService?: CookieService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const user: User = JSON.parse(localStorage.getItem('user'));
        if (user == null) {
            this._cookieService.deleteAll();
            this.router.navigate(['auth/login']);
        }

        const tokenExpiryTime: number = user.tokenExpiredAt;
        const currentTimeInMs: number = Math.round(Date.now() / 1000);

        const remainingTimeToLogOut = tokenExpiryTime - currentTimeInMs;

        if (remainingTimeToLogOut > 0 && remainingTimeToLogOut <= 200) {
            // ToKen will be expire soon, refresh token
        }

        if (tokenExpiryTime < currentTimeInMs) {
            this._cookieService.deleteAll();
            this.router.navigate(['auth/login']);
            return false;
        }

        return true;
    }
}
