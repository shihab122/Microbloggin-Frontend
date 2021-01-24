export class LoginRequestBody {
  public username: string;
  public password: string;
  public rememberMe: boolean;

  constructor(loginRequestBody?) {
    loginRequestBody = loginRequestBody || {};
    this.username = loginRequestBody.username || null;
    this.password = loginRequestBody.password || null;
    this.rememberMe = loginRequestBody.rememberMe || null;
  }
}
