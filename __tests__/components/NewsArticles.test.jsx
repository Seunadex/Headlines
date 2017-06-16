import axios from 'axios';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import NewsArticles from '../../src/components/NewsArticles';
import NewsActions from '../../src/actions/NewsActions';

// jest.dontMock('../../src/components/NewsArticles.jsx');

chai.use(chaiEnzyme());
const wrapper = mount(<NewsArticles fetchNews={NewsActions.fetchNews} />);

describe('Test for News Articles', () => {
  describe('#NewsArticles', () => {
    it('component should exist', () => {
      expect(wrapper).to.be.present();
    });
    it('should fetch data on component mount', () => {
      const fetchNews = sinon.stub();
      expect(fetchNews.callCount).to.equal(0);
    });
  });
});
