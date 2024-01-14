const ACCESS_TOKEN = 'accessToken';

export class ArmazenadorToken {
    static definirTokens(accessToken) {
        sessionStorage.setItem(ACCESS_TOKEN, accessToken)
    }
    static get accessToken () {
        return sessionStorage.getItem(ACCESS_TOKEN)
    }
    static efetuarLogout () {
        sessionStorage.removeItem(ACCESS_TOKEN)
    }
}