import sourceStore from '../../src/stores/SourceStore';
import Dispatcher from '../../src/dispatcher/AppDispatcher';
import Constants from '../../src/constants/Constants';

jest.mock('../../src/dispatcher/AppDispatcher');
jest.dontMock('../../src/stores/SourceStore');

describe('SourceStore', () => {
  const fetchSources = {
    actionName: Constants.FETCH_SOURCES,
    sources: [{
      id: 'abc-news-au',
      name: 'ABC News (AU)'
    }, {
      id: 'al-jazeera-english',
      name: 'Al Jazeera English'
    }],
  };
  let callback;
  beforeEach(() => {
    callback = Dispatcher.register.mock.calls[0][0];
  });
  it('store initializes with no data', () => {
    const allNews = sourceStore.getAll().length;
    expect(allNews).toBe(0);
  });

  it('register a callback with the dispatcher', () => {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  it('should fetch correct news source ', () => {
    callback(fetchSources);
    const keys = Object.keys(sourceStore.getAll());
    expect(keys.length).toBe(2);
    expect(sourceStore.getAll()[keys[0]].name).toEqual('ABC News (AU)');
  });

  it('contain function addChangeListener', () => {
    callback = () => 'something';
    expect(sourceStore.addChangeListener(callback)).toEqual(undefined);
  });

  it('contain function emitChange', () => {
    expect(sourceStore.emitChange()).toEqual(undefined);
  });

  it('contain function removeChangeListener', () => {
    callback = () => 'something';
    expect(sourceStore.removeChangeListener(callback)).toEqual(undefined);
  });
});
