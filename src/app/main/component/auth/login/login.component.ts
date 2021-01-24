import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {UserService} from '../../../../service/user.service';
import {environment} from '../../../../../environments/environment';
import * as JWT from 'jwt-decode';
import {ToastrService} from 'ngx-toastr';
import {User} from '../../../../model/user.model';
import {LoginRequestBody} from '../../../../model/login-request-body.model';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  processing = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private el: ElementRef,
    private cookieService: CookieService,
    private userService: UserService
  ) {
    console.log("hello");
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._@]+$')]),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    });
  }

  login(): void {
    if (!this.loginForm.value || !this.loginForm.value.username || !this.loginForm.value.password) {
      // this.toasterService.error('Please complete the required field.');
      return;
    }

    this.processing = true;
    const loginRequestBody: LoginRequestBody = new LoginRequestBody();
    loginRequestBody.username = this.loginForm.value.username;
    loginRequestBody.password = this.loginForm.value.password;
    loginRequestBody.rememberMe = this.loginForm.value.rememberMe;

    this.userService.login(loginRequestBody).subscribe(({ data }: any) => {
      console.log(data);
      if (!data || !data.login) {
        // this.toasterService.warning('Service communication failed! Please try again.');
      }
      if (data.login.data) {
        const encodedToken = data.login.data;

        const jwtTokenData: any = JWT(encodedToken);
        const issuer = jwtTokenData.iss;
        const authorizedTo = jwtTokenData.sub;
        const expiredTokenMs = jwtTokenData.exp;
        const currentTimeMs = new Date().getMilliseconds();
        const authTokenIssuer = environment.auth_token_issuer;
        const userStatus = jwtTokenData.status;

        if (issuer !== authTokenIssuer) {
          // this.toasterService.error('Authorization issuer not valid!');
        } else if (authorizedTo !== this.loginForm.value.username) {
          // this.toasterService.error('This token is not issued for you!');
        } else if (currentTimeMs > expiredTokenMs) {
          // this.toasterService.error('Your token is expired!');
        } else if (userStatus !== 'ACTIVE') {
          // this.toasterService.error('Your account is not active!');
        } else {
          // this.toasterService.success('Please wait while system is prepared for you.', 'Authentication succeed');

          const user: User = new User();
          user.id = jwtTokenData.id;
          user.username = jwtTokenData.username;
          user.userType = jwtTokenData.user_type;
          user.tokenIssuedAt = jwtTokenData.iat;
          user.tokenExpiredAt = expiredTokenMs;

          localStorage.setItem('user', JSON.stringify(user));

          this.router.navigate(['/dashboard']);
        }
      }
    }, (error) => {
      console.log('there was an error sending the query', error);
      // this.toasterService.warning('Something went wrong! Please contact with support team.');
      this.processing = false;
    });
  }

  forgetPassword(): void {
    // this.toasterService.info('Please contact with the support team.', 'Feature is not activated.');
  }

  register(): void {

  }

}
