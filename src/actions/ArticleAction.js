import axios from 'axios';
import Constants from '../constants/Constants';
import Dispatcher from '../dispatcher/AppDispatcher';
import Api from '../utils/Api';

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
 *
 *
 * @param {any} title
 * @param {any} description
 * @param {any} meta
 * @param {any} link
 * @param {any} image
 * @returns {object}
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

const ArticleAction = {

/**
 * Fetch Articles
 * @param id represents the name of the source
 * @param val represents the value of the sortBysAvailable
 */
  fetchNews: (id, val) => {
    /**
     * @returns {string} checks if the val exist
     * @function reset the link
     */
    const source = val ? `${id}&sortBy=${val}` : `${id}`;
    Api.resetQuery();

    Api.addQuery('source', source);
    return axios.get(Api.getLink())
      .then((responseText) => {
    // initialize variable to news features
        const feeds = new ArticleProperties();
        if (responseText.statusText === 'OK') {
          const articles = responseText.data.articles;
          articles.forEach((article) => {
            feeds.add(article.title,
                article.description,
                article.author,
                article.url,
                article.urlToImage,
      );
          });

          Dispatcher.dispatch({
            actionName: Constants.FETCH_NEWS,
            news: feeds.get(),
          });
        }
      });
  },
};

module.exports = ArticleAction;
