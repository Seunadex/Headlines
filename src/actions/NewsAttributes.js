/**
 *
 * @desc Contains parameters to extract from API data.
 * @class NewsAttributes
 */
class NewsAttributes {
  /**
   * Creates an instance of NewsAttributes with a news property.
   *
   * @memberof NewsAttributes
   */
  constructor() {
    this.news = [];
  }

  /**
   * @desc extracts title, description, image-url, and address from news source.
   * @returns {void}
   * @param {string} title  represents the headline title
   * @param {string} description  represents a brief description of headline.
   * @param {string} meta  represents the name of the news source.
   * @param {string} link   represents the url to the original article or news.
   * @param {string} image  represents the url for the cover image of the headline.
   *
   * @memberof NewsAttributes
   */
  add(title, description, meta, link, image) {
    this.news.push({
      href: link,
      header: title,
      description,
      meta,
      image,
    });
  }

  /**
   *
   * @desc returns the value of news property
   * @returns {object} array
   *
   * @memberof NewsAttributes
   */
  get() {
    return this.news;
  }


}
export default NewsAttributes;
