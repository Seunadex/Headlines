import keyMirror from 'keymirror';

const Constants = keyMirror({
    /**
     * fetch the news headlines based on sources
     *
     * get the article under each headline
     */
  fetchSources: 'FETCH_SOURCES',
  fetchNews: 'FETCH_NEWS',
  getError: 'GET_ERROR'
});

export default Constants;
