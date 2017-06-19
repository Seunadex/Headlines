import axios from 'axios';
import Constants from '../constants/Constants';
import Dispatcher from '../dispatcher/AppDispatcher';
import ArticleProperties from './ArticleProperties';
import Api from '../utils/Api';


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
      .then((response) => {
    // initialize variable to news features
        const feeds = new ArticleProperties();
        if (response.status === 200) {
          const articles = response.data.articles;
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

export default ArticleAction;
