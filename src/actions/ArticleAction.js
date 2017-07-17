import axios from 'axios';
import Constants from '../constants/Constants';
import Dispatcher from '../dispatcher/AppDispatcher';
import Api from '../utils/Api';
import ArticleProps from '../actions/ArticleProps';

const ArticleAction = {

/**
 * @desc Fetch Articles
 * @param {string} id represents the name of the source
 * @param {string} sortByType represents the type of the sortBysAvailable
 *  @returns {object} gets the news from the API.
 */
  fetchNews: (id, sortByType) => {
    /**
     * @returns {string} checks if the val exist
     * @function reset the link
     */
    const source = sortByType ? `${id}&sortBy=${sortByType}` : `${id}`;
    Api.resetQuery();

    Api.addQuery('source', source);
    return axios.get(Api.getLink())
      .then((responseText) => {
        const feeds = new ArticleProps();
        if (responseText.statusText === 'OK') {
          const articles = responseText.data.articles;
          articles.forEach((article) => {
            feeds.appendArticleParam(article.title,
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
      }).catch((errorMessage) => {
        Dispatcher.dispatch({
          actionName: Constants.GET_ERROR,
          errorMessage
        });
      });
  },
};

module.exports = ArticleAction;
