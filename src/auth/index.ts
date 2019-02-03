export default class AuthUser {
  private static user: any = null;

  public static setUser(user: any) {
    AuthUser.user = user;
  }

  public static getUser() {
    return AuthUser.user;
  }

  public static getToken() {
    return AuthUser.user ? AuthUser.user.token : null;
  }
}