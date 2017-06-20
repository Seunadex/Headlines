import axios from 'axios';
import Constants from '../constants/Constants';
import Dispatcher from '../dispatcher/AppDispatcher';
import Api from '../utils/Api';

/**
 * @desc contains methods that extract relevant fields
 * from the data received the news API.
 */
class SourceProperties {
/**
 * Creates an instance of SourceProperties.
 * @memberof SourceProperties
 */
  constructor() {
    this.sources = [];
  }

  /**
   * @desc extract specific data fields from data received from the API end point.
   *
   * @param {any} index
   * @param {any} id
   * @param {any} name
   * @param {any} description
   * @param {any} category
   * @param {any} sortBysAvailable
   * @returns {void}
   * @memberof SourceProperties
   */
  add(index, id, name, description, category, sortBysAvailable) {
    this.sources.push({
      href: `/articles/${id}`,
      id: index,
      header: name,
      description,
      category,
      title: name,
      sortBysAvailable,
    });
  }

  /**
   * @desc returns the value of the sources property everytime it is called.
   * @returns {object} object containing all news sources
   */
  get() {
    return this.sources;
  }
}
export default SourceProperties;

const SourceAction = {
  fetchSources: () => {
    Api.resetQuery();
    const sourceProperties = new SourceProperties();

    return axios.get(Api.sourceLink)
              .then((responseText) => {
                if (responseText.statusText === 'OK') {
                  const sources = responseText.data.sources;
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
                    actionName: Constants.FETCH_SOURCES,
                    sources: sourceProperties.get(),
                  });
                }
              });
  },
};
module.exports = SourceAction;
