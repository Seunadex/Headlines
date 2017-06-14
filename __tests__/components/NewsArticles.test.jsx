import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { mount } from 'enzyme';
import NewsArticles from '../../src/components/NewsArticles';

jest.dontMock('../../src/components/NewsArticles.jsx');

chai.use(chaiEnzyme());
const wrapper = mount(<NewsArticles />);

describe('Test for News Articles', () => {
  describe('#NewsArticles', () => {
    it('component should exist', () => {
      expect(wrapper).to.be.present();
    });
  });
});
