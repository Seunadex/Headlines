import newsStore from '../../src/stores/NewsStore';
import Constants from '../../src/constants/Constants';
import Dispatcher from '../../src/dispatcher/AppDispatcher';

jest.mock('../../src/dispatcher/AppDispatcher');
jest.dontMock('../../src/stores/NewsStore');

describe('NewsStore', () => {
  let callback;
  beforeEach(() => {
    callback = Dispatcher.register.mock.calls[0][0];
  });

  test('register a callback with the dispatcher', () => {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  test('store initializes with no data', () => {
    const allNews = newsStore.getAll().length;
    expect(allNews).toBe(0);
  });
  test('contain function addChangeListener', () => {
    callback = () => {
      return 'something';
    }
    expect(newsStore.addChangeListener(callback)).toEqual(undefined);
  });
  test('contain function emitChange', () => {
    expect(newsStore.emitChange()).toEqual(undefined);
  });
  test('contain function removeChangeListener', () => {
    callback = () => {
      return 'something';}
    expect(newsStore.removeChangeListener(callback)).toEqual(undefined);
  });
});