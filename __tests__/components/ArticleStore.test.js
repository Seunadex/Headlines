import articleStore from '../../src/stores/ArticleStore';
import Dispatcher from '../../src/dispatcher/AppDispatcher';

jest.mock('../../src/dispatcher/AppDispatcher');
jest.dontMock('../../src/stores/ArticleStore');

describe('ArticleStore', () => {
  let callback;
  beforeEach(() => {
    callback = Dispatcher.register.mock.calls[0][0];
  });

  test('register a callback with the dispatcher', () => {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  test('store initializes with no data', () => {
    const allNews = articleStore.getAll().length;
    expect(allNews).toBe(0);
  });
  test('contain function addChangeListener', () => {
    callback = () => {
      return 'something';
    };
    expect(articleStore.addChangeListener(callback)).toEqual(undefined);
  });
  test('contain function emitChange', () => {
    expect(articleStore.emitChange()).toEqual(undefined);
  });
  test('contain function removeChangeListener', () => {
    callback = () => {
      return 'something';
    };
    expect(articleStore.removeChangeListener(callback)).toEqual(undefined);
  });
});

