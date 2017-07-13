import expect from 'expect';
import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import NewsArticles from '../../src/components/NewsArticles';
import ArticleAction from '../../src/actions/ArticleAction';
import mockArticle from '../../__mock__/mockArticle.json';
import articleStore from '../../src/stores/ArticleStore';
import localStorageMock from '../../__mock__/localStorageMock';

window.localStorage = localStorageMock;

jest.dontMock('../../src/components/NewsArticles.jsx');
let wrapper;

describe('Test for News Articles', () => {
  const wrapper = mount(<NewsArticles fetchNews={ArticleAction.fetchNews} />);
  const spyWillUnmount = sinon.spy(NewsArticles.prototype, 'componentWillUnmount');

  describe('#NewsArticles', () => {
    it('component should exist', () => {
      expect(wrapper).toBeTruthy();
    });
     it('Should call onClick event', () => {
      wrapper.instance().onClick();
      const onClick = jest.fn();
      const component = mount(<NewsArticles onClick={onClick} />)
      expect(component.props().onClick).toEqual(onClick);
    });

    it('should fetch data on component mount', () => {
      const fetchNews = sinon.stub();
      expect(fetchNews.callCount).toEqual(0);
    });

    it('should call an onChange function', () => {
      wrapper.instance().onChange();
      const onChange = jest.fn();
      const component = mount(<NewsArticles onChange={onChange} />);
      expect(component.props().onChange).toEqual(onChange);
  }); 

  it('should call a removeChangeListener function', () => {
    let callback = () => {
      return 'something';
    };
    expect(articleStore.removeChangeListener(callback)).toEqual(undefined);
  });

  it('Should have a componentWillUnmount function', () => {
    const componentWillUnmount = sinon.spy();
    expect(componentWillUnmount.callCount).toEqual(0);
  });
 
});

describe('Unmount NewsArticles',() => {
  it('should be unmounted', () => {
    wrapper.unmount();
    expect(spyWillUnmount.calledOnce);
  });
});

});
