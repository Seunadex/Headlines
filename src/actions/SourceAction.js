import axios from 'axios';
import Constants from '../constants/Constants';
import Dispatcher from '../dispatcher/AppDispatcher';
import Api from '../utils/Api';
import SourceProps from '../actions/SourceProps';

const SourceAction = {
  fetchSources: () => {
    Api.resetQuery();
    const sourceProps = new SourceProps();

    return axios.get(Api.sourceLink)
              .then((responseText) => {
                if (responseText.statusText === 'OK') {
                  const sources = responseText.data.sources;
                  sources.forEach((source, index) => {
                    sourceProps.addSourceParam(index,
                        source.id,
                        source.name,
                        source.description,
                        source.category,
                        source.sortBysAvailable,
                        );
                  });

                  Dispatcher.dispatch({
                    actionName: Constants.FETCH_SOURCES,
                    sources: sourceProps.get(),
                  });
                }
              });
  },
};
module.exports = SourceAction;
