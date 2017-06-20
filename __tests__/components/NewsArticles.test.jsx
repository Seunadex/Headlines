import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewsArticles from '../../src/components/NewsArticles';
import ArticleAction from '../../src/actions/ArticleAction';
import mockArticle from '../../__mock__/mockArticle.json';
import articleStore from '../../src/stores/ArticleStore';

jest.dontMock('../../src/components/NewsArticles.jsx');
let wrapper;
chai.use(chaiEnzyme());
beforeEach(() => {
  wrapper = mount(<NewsArticles fetchNews={ArticleAction.fetchNews} />);
});

describe('Test for News Articles', () => {
  describe('#NewsArticles', () => {
    it('component should exist', () => {
      expect(wrapper).to.be.present();
    });
    it('should fetch data on component mount', () => {
      const fetchNews = sinon.stub();
      expect(fetchNews.callCount).to.equal(0);
    });
    it('should have an onChange function', () => {
    const onChange = jest.fn();
    const component = mount(<NewsArticles onChange={onChange} />);
    expect(component.props().onChange).to.equal(onChange);
  });
  it('contain function removeChangeListener', () => {
    let callback = () => {
      return 'something';
    };
    expect(articleStore.removeChangeListener(callback)).to.equal(undefined);
  });
  it('Should have a componentWillUnmount function', () => {
    const componentWillUnmount = sinon.spy();
    expect(componentWillUnmount.callCount).to.equal(0);
  });
});

});
