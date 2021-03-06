/**
 * @desc contains resources for http call
 *
 * @class Api
 */
class Api {
  /**
   * Creates an instance of Api.
   *
   * @memberof Api
   */
  constructor() {
    this.apiKey = process.env.API_KEY;
    this.sourceLink = 'https://newsapi.org/v1/sources?language=en';
    this.articleLink = 'https://newsapi.org/v1/articles?';
    this.link = this.articleLink;
  }

  /**
   * @param {string} type describes the source of the news
   * @param {string} value decribes the actual value of the source
   *
   * @memberof Api
   */
  addQuery(type, value) {
    this.link += `&${type}=${value}&apiKey=${this.apiKey}`;
  }

  /**
   * @return {void}
   * @desc resets this.link
   *
   * @memberof Api
   */
  resetQuery() {
    this.link = this.articleLink;
  }

  /**
   * @desc sets the endpoint for API call
   * @returns {string}
   *
   * @memberof Api
   */
  getLink() {
    return this.link;
  }

}

export default new Api();
