/**
 *
 * @desc Contains parameters to extract from API data.
 * @class ArticleProperties
 */
class ArticleProperties {
  /**
   * Creates an instance of ArticleProperties with a news property.
   *
   * @memberof ArticleProperties
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
   * @memberof ArticleProperties
   */
  add(title, description, meta, link, image) {
    this.news.push({ href: link,
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
   */
  get() {
    return this.news;
  }


}
export default ArticleProperties;
