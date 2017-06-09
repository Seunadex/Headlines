/**
 *
 * @desc Contains parameters to extract from API data.
 * @class NewsProperties
 */
class NewsProperties {
  /**
   * Creates an instance of NewsProperties with a news property.
   *
   * @memberof NewsProperties
   */
  constructor() {
    this.news = [];
  }

  /**
   * @desc extracts title, description, image-url, and address from news source.
   * @param title  represents the headline title
   * @param description  represents a brief description of headline.
   * @param meta  represents the name of the news source.
   * @param link   represents the url to the original article or news.
   * @param image  represents the url for the cover image of the headline.
   *
   * @memberof NewsProperties
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
   *
   * @memberof NewsProperties
   */
  get() {
    return this.news;
  }


}
export default NewsProperties;
