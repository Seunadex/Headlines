import keyMirror from 'keymirror';

// action constants
const Constants = keyMirror({
  // FETCH_SOURCES: null,   // fetch the news headlines based on sources
  // FETCH_NEWS: null,  // get the article under each headline
  fetchSources: 'FETCH_SOURCES',
  fetchNews: 'FETCH_NEWS',
});

export default Constants;
