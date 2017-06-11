import axios from 'axios';
import Constants from '../constants/Constants';
import Dispatcher from '../dispatcher/AppDispatcher';
import SourceProperties from './SourceProperties';
import NewsProperties from './NewsProperties';
import Api from '../utils/Api';


const NewsActions = {

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
      const feeds = new NewsProperties();
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
          eventName: Constants.FETCH_NEWS,
          news: feeds.get(),
        });
      }
    }).catch((error) => {
      throw error;
    });
  },

// Sources
  fetchSources: () => {
    Api.resetQuery();
    const sourceProperties = new SourceProperties();

    return axios.get(Api.sourceLink)
              .then((response) => {
      if (response.status === 200) {
        const sources = response.data.sources;
        sources.forEach((source, index) => {
          sourceProperties.add(index,
                         source.id,
                         source.name,
                         source.description,
                         source.category,
                         source.sortBysAvailable,
                         );
        });

        Dispatcher.dispatch({
          eventName: Constants.FETCH_SOURCES,
          sources: sourceProperties.get(),
        });
      }
    }).catch((error) => {
      throw error;
    });
  },
};

export default NewsActions;
