import axios from 'axios';
import NewsActionTypes from '../constants/NewsActionTypes';
import appDispatcher from '../dispatcher/AppDispatcher';
import SourceProperties from './SourceProperties';
import NewsProperties from './NewsProperties';
import Api from '../utils/Api';


const NewsActions = {

  fetchNews: (id, val) => {
    const source = val ? `${id}&sortBy=${val}` : `${id}`;
    Api.resetQuery();

    Api.addQuery('source', source);
    return axios.get(Api.getLink()).then((response) => {
      const feeds = new NewsProperties(); // initialize variable to news features
      const body = response.data;
      if (response.status === 200) {
        const articles = body.articles;
        articles.forEach((article) => {
          feeds.add(article.title, 
                    article.description, 
                    article.author,
                    article.url, 
                    article.urlToImage
            );
        });

        appDispatcher.dispatch({
          eventName: NewsActionTypes.GET_NEWS,
          news: feeds.get(),
        });
      }
    }).catch((error) => {
      throw error;
    });
  },

  fetchSources: () => {
    Api.resetQuery();
    const sourceProperties = new SourceProperties();

    return axios.get(Api.apilink).then((response) => {
      if (response.status === 200) {
        const body = response.data;
        const sources = body.sources;
        sources.forEach((source, index) => {
          sourceProperties.add(index, 
                              source.id, 
                              source.name, 
                              source.description,
                              source.category, 
                              source.sortBysAvailable
                              );
        });

        appDispatcher.dispatch({
          eventName: NewsActionTypes.GET_SOURCES,
          sources: sourceProperties.get(),
        });
      }
    }).catch((error) => {
      throw error;
    });
  },
};

export default NewsActions;
