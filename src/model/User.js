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
   *
   * @param {any} w3 represents the user details in object format
   * @param {any} ig represents the full name of the user from their google account
   * @param {any} U3 represents the user's email address
   * @param {any} Paa represents the image url of the user
   */
  login(response) {
    const user = response.w3;
    Cookies.set('user_data', {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
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
