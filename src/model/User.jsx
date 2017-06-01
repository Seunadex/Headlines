import Cookies from 'js-cookie';

class User {
  /**
   * @description Creates an instance of User.
   * @memberof User
   */
  constructor() {
    this.isLogin = this.userDetails();
  }
  /**
   *@description  logs the user in.
   * @param {any} response an object containing user
   * profile
   * @memberof User
   * @returns {undefined} it returns no value
   */
  login(response) {
    const user = response.w3;
    Cookies.set('news_feed', {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    });
    this.isLogin = true;
    this.userDetails();
    console.log(Cookies.get('news_feed'));
  }
  /**
   * @description logs the user out.
   * @returns{undefined} it has no return value
   */
  logOut() {
    this.isLogin = false;
    Cookies.remove('news_feed');
  }
  /**
   * @description assigns User values
   * @returns {boolean}  true or false
   */
  userDetails() {
    if (Cookies.get('news_feed')) {
      const details = JSON.parse(Cookies.get('news_feed'));
      this.name = details.name;
      this.email = details.email;
      this.imageUrl = details.imageUrl;
      return true;
    }
    return false;
  }
}
export default new User();

