import axios from 'axios';
import sinon from 'sinon';
import expect from 'expect';
import Dispatcher from '../../src/dispatcher/AppDispatcher';
import SourceAction from '../../src/actions/SourceAction';
import Constants from '../../src/constants/Constants';
import sampleSources from '../../__mock__/sampleSources.json';


describe(' Source Action test', () => {
  let mockAxios;
  let dispatchSpy;

  beforeEach(() => {
    mockAxios = sinon.stub(axios, 'get').callsFake(() => (
      Promise.resolve({
        data: {
          sources: sampleSources,
        },
      })
    ));
    dispatchSpy = sinon.spy(Dispatcher, 'dispatch');
  });
  afterEach(() => {
    axios.get.restore();
    Dispatcher.dispatch.restore();
  });
  test('should call axios and dispatcher at least once', () => {
    SourceAction.fetchSources().then(() => {
      expect(dispatchSpy).toHaveBeenCalled();
      expect(mockAxios.calledOnce).toBe(true);
      expect(dispatchSpy.calledOnce).toBe(true);

      Dispatcher.dispatch({
        actionName: 'FETCH_SOURCES',
        sources: sampleSources,
      });
      expect(dispatchSpy.getCall(0).args[0].type).toBe('FETCH_SOURCES');
    });
    test('should load news sources', () => SourceAction.fetchSources('al-jazeera-english')
    .then(() => {
      expect(dispatchSpy).toHaveBeenCalled();
      expect(dispatchSpy.mock.calls[0][0].actionName).toEqual(Constants.FETCH_SOURCES);
      expect(dispatchSpy.mock.calls[0][0].sources[0].meta).toEqual('Al Jazeera English');
      expect(dispatchSpy.mock.calls[0][0].sources).toBeInstanceOf(Object);
    }));
    it('Should dispatch the news sources to the store', () => {
      SourceAction.fetchSources().then(() => {
        expect(mockAxios).to.have.callCount(1);
        expect(dispatchSpy).to.have.been.calledWith({
          actionName: 'FETCH_SOURCES',
          source: sampleSources,
        });
      });
    });
  });
});
