import axios from 'axios';
import sinon from 'sinon';
import expect from 'expect';
import Dispatcher from '../../src/dispatcher/AppDispatcher';
import ArticleAction from '../../src/actions/ArticleAction';
import mockArticle from '../../__mock__/mockArticle.json';

describe('Article Action test', () => {
  let mockAxios;
  let dispatchSpy;

  beforeEach(() => {
    mockAxios = sinon.stub(axios, 'get').callsFake(() => (
      Promise.resolve({
        data: {
          news: mockArticle,
        },
      })
    ));
    dispatchSpy = sinon.spy(Dispatcher, 'dispatch');
  });
  afterEach(() => {
    mockAxios.restore();
    Dispatcher.dispatch.restore();
  });

  it('should call axios and dispatcher once', () => {
    ArticleAction.fetchNews().then(() => {
      expect(mockAxios.calledOnce).toBe(true);
      expect(dispatchSpy.calledOnce).toBe(true);
      expect(dispatchSpy).toHaveBeenCalled();

      Dispatcher.dispatch({
        actionName: 'FETCH_NEWS',
        news: mockArticle,
      });
      expect(dispatchSpy.getCall(0).args[0].type).toBe('FETCH_NEWS');
    });
  });

  it('Should dispatch the news article to the store', () => {
    ArticleAction.fetchNews().then(() => {
      expect(mockAxios).to.have.callCount(1);
      expect(dispatchSpy).to.have.been.calledWith({
        actionName: 'FETCH_NEWS',
        source: mockArticle,
      });
    });
  });
});
