import Cookie from 'js-cookie';

export class AuthHelper {

  /**
   * removeCookie - Remove entry from Cookie store
   * @param {string} name
   * @param {Cookie.CookieAttributes} options
   */
  static removeCookie(name, options = undefined) {
    Cookie.remove(name, options);
  }

  static getCookie(name) {
    return Cookie.get(name);
  }

  static getAllCookies() {
    return Cookie.get();
  }

  /**
   * setCookie - Set Cookie store
   * @param {string} name
   * @param {*} value
   * @param {Cookie.CookieAttributes} options
   */
  static setCookie(name, value, options = undefined) {
    Cookie.set(name, value, options);
  }
}

export default AuthHelper;
