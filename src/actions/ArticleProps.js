/**
 *
 * @desc Contains parameters to extract from API data.
 * @class ArticleProps
 */
class ArticleProps {
  /**
   * @desc Creates an instance of ArticleProps with a news property.
   *
   * @memberof ArticleProps
   */
  constructor() {
    this.news = [];
  }

/**
 *
 * @param {string} title represents the title of the news article.
 * @param {string} description represents a short description of the news.
 * @param {string} meta represents the title of the article
 * @param {string} link represnts news article url.
 * @param {string} image represents the article imageUrl
 * @returns {object} an object containing some key value pair data.
 * @memberof ArticleProps
 */
  addArticleParam(title, description, meta, link, image) {
    this.news.push({ href: link,
      header: title,
      description,
      meta,
      image,
    });
  }

  /**
   *
   * @returns {object} value of news property
   *
   */
  get() {
    return this.news;
  }


}
export default ArticleProps;
