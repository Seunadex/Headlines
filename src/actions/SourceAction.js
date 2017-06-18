import axios from 'axios';
import Constants from '../constants/Constants';
import Dispatcher from '../dispatcher/AppDispatcher';
import SourceProperties from './SourceProperties';
import Api from '../utils/Api';


const SourceAction = {
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
                    actionName: Constants.FETCH_SOURCES,
                    sources: sourceProperties.get(),
                  });
                }
              });
  },
};

export default SourceAction;
