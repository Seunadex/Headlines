/**
 *
 *
 * @class User
 */
class User {
  /**
   * @description Creates an instance of User.
   * @memberof User
   */
  constructor() {
    this.isLoggedIn = this.userDetails();
  }
  /**
   *@description  logs the user in.
   * @param {object} response an object containing user
   * profile
   * @memberof User
   * @returns {undefined} it returns no value
   *
   */
  login(response) {
    return new Promise((resolve) => {
      const user = response.profileObj;
      localStorage.setItem('current_user', user.givenName);
      localStorage.setItem('current_user_image', user.imageUrl);
      this.isLoggedIn = true;
      this.userDetails();
      resolve();
    });
  }
  /**
   * @description logs the user out.
   * @returns {undefined} it has no return value
   */
  logOut() {
    this.isLoggedIn = false;
    localStorage.removeItem('current_user');
    localStorage.removeItem('current_user_image');
  }
  /**
   * @description assigns User values
   * @returns {boolean}  true or false
   */
  userDetails() {
    if (localStorage.current_user) {
      this.name = localStorage.current_user;
      this.imageUrl = localStorage.current_user_image;
      return true;
    }
    return false;
  }
}
export default new User();
