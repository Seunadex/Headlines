import SourceStore from '../../src/stores/SourceStore';
import Dispatcher from '../../src/dispatcher/AppDispatcher';

jest.mock('../../src/dispatcher/AppDispatcher');
jest.dontMock('../../src/stores/SourceStore');

describe('SourceStore', () => {
  let callback;
  beforeEach(() => {
    callback = Dispatcher.register.mock.calls[0][0];
  });

  it('register a callback with the dispatcher', () => {
    expect(Dispatcher.register.mock.calls.length).toBe(1);
  });

  it('store initializes with no data', () => {
    const allNews = SourceStore.getAll().length;
    expect(allNews).toBe(0);
  });
  it('contain function addChangeListener', () => {
    callback = () => 'something';
    expect(SourceStore.addChangeListener(callback)).toEqual(undefined);
  });
  it('contain function emitChange', () => {
    expect(SourceStore.emitChange()).toEqual(undefined);
  });
  it('contain function removeChangeListener', () => {
    callback = () => 'something';
    expect(SourceStore.removeChangeListener(callback)).toEqual(undefined);
  });
});
