import articleStore from '../../src/stores/ArticleStore';
import Dispatcher from '../../src/dispatcher/AppDispatcher';
import Constants from '../../src/constants/Constants';

jest.mock('../../src/dispatcher/AppDispatcher');
jest.dontMock('../../src/stores/ArticleStore');

describe('ArticleStore', () => {
  const fetchNews = {
    actionName: Constants.FETCH_NEWS,
    news: [{
      author: 'ERICA WERNER',
      title: 'Top House GOP leader shot at congressional baseball practice',
    }, {
      author: 'GREGORY KATZ and DANICA KIRKA',
      title: 'Children tossed out of windows in London high-rise blaze',
    }]
  };
  let callback;
  beforeEach(() => {
    callback = Dispatcher.register.mock.calls[0][0];
  });

  it('register a callback with the dispatcher', () => {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  it('store initializes with no data', () => {
    const allNews = articleStore.getAll().length;
    expect(allNews).toBe(0);
  });
  it('contain function addChangeListener', () => {
    callback = () => 'something';
    expect(articleStore.addChangeListener(callback)).toEqual(undefined);
  });

  it('should fetch correct article ', () => {
    callback(fetchNews);
    const keys = Object.keys(articleStore.getAll());
    expect(keys.length).toBe(2);
    expect(articleStore.getAll()[keys[1]].author).toEqual('GREGORY KATZ and DANICA KIRKA');
  });
  it('contain function emitChange', () => {
    expect(articleStore.emitChange()).toEqual(undefined);
  });
  it('contain function removeChangeListener', () => {
    callback = () => 'something';
    expect(articleStore.removeChangeListener(callback)).toEqual(undefined);
  });
});

