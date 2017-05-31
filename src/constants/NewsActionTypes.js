import keyMirror from 'keymirror';

// Define action constants
const NewsActionTypes = keyMirror({
  FETCH_SOURCES: null,   // fetch the news headlines based on sources
  FETCH_NEWS: null,  // get the article under each headline
});

export default NewsActionTypes;
