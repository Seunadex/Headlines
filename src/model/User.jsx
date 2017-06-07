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
    const user = response.w7;
    Cookies.set('user_data', {
      name: user.ig,
      email: user.mail,
      imageUrl: user.img,
    });
    this.isLogin = true;
    this.userDetails();
  }
  /**
   * @description logs the user out.
   * @returns{undefined} it has no return value
   */
  logOut() {
    this.isLogin = false;
    Cookies.remove('user_data');
  }
  /**
   * @description assigns User values
   * @returns {boolean}  true or false
   */
  userDetails() {
    if (Cookies.get('user_data')) {
      /**
       * user details to be treated as a JSON object
       */
      const data = JSON.parse(Cookies.get('user_data'));
      this.name = data.name;
      this.email = data.email;
      this.imageUrl = data.imageUrl;
      return true;
    }
    return false;
  }
}
export default new User();

