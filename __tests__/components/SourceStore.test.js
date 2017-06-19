import SourceStore from '../../src/stores/SourceStore';
import Dispatcher from '../../src/dispatcher/AppDispatcher';

jest.mock('../../src/dispatcher/AppDispatcher');
jest.dontMock('../../src/stores/SourceStore');

describe('SourceStore', () => {
  let callback;
  beforeEach(() => {
    callback = Dispatcher.register.mock.calls[0][0];
  });

  test('register a callback with the dispatcher', () => {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  test('store initializes with no data', () => {
    const allNews = SourceStore.getAll().length;
    expect(allNews).toBe(0);
  });
  test('contain function addChangeListener', () => {
    callback = () => {
      return 'something';
    };
    expect(SourceStore.addChangeListener(callback)).toEqual(undefined);
  });
  test('contain function emitChange', () => {
    expect(SourceStore.emitChange()).toEqual(undefined);
  });
  test('contain function removeChangeListener', () => {
    callback = () => {
      return 'something';
    };
    expect(SourceStore.removeChangeListener(callback)).toEqual(undefined);
  });
});
