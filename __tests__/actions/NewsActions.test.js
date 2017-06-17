import axios from 'axios';
import sinon from 'sinon';
import expect from 'expect';
import Dispatcher from '../../src/dispatcher/AppDispatcher';
import NewsActions from '../../src/actions/NewsActions';
import Constants from '../../src/constants/Constants';
import sampleSources from '../../__mock__/sampleSources.json';
import mockArticle from '../../__mock__/mockArticle.json';


describe('Action test', () => {
  let mockAxios;
  let dispatchSpy;

  beforeEach(() => {
    mockAxios = sinon.stub(axios, 'get').callsFake(() => (
      Promise.resolve({
        data: {
          sources: sampleSources,
          articles: mockArticle,
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
    NewsActions.fetchSources().then(() => {
      expect(dispatchSpy).toHaveBeenCalled();
      expect(mockAxios.calledOnce).toBe(true);
      expect(dispatchSpy.calledOnce).toBe(true);

      Dispatcher.dispatch({
        eventName: 'FETCH_SOURCES',
        sources: sampleSources,
      });
      expect(dispatchSpy.getCall(0).args[0].type).toBe('FETCH_SOURCES');
    });
    test('should call axios and dispatcher once', () => {
      NewsActions.fetchNews().then(() => {
        expect(mockAxios.calledOnce).toBe(true);
        expect(dispatchSpy.calledOnce).toBe(true);
        expect(dispatchSpy).toHaveBeenCalled();

        Dispatcher.dispatch({
          eventName: 'FETCH_NEWS',
          news: sampleSources,
        });
        expect(dispatchSpy.getCall(0).args[0].type).toBe('FETCH_NEWS');
      });
    });
    it('should load news articles', () => NewsActions.fetchNews('al-jazeera-english')
    .then(() => {
      expect(dispatchSpy).toHaveBeenCalled();
      expect(dispatchSpy.mock.calls[0][0].eventName).toEqual(Constants.FETCH_NEWS);
      expect(dispatchSpy.mock.calls[0][0].news[0].meta).toEqual('Al Jazeera English');
      expect(dispatchSpy.mock.calls[0][0].news).toBeInstanceOf(Object);
    }));
  });
});
