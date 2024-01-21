const ACCESS_TOKEN = "accessToken";

export class ArmazenadorToken {
  static definirTokens(accessToken) {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
  }
  static get accessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  }
  static efetuarLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
  }
}
