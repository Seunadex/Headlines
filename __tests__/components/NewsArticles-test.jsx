/* global describe it jest*/
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import NewsArticles from '../../src/components/NewsArticles';

jest.dontMock('../../src/components/NewsArticles.jsx');

chai.use(chaiEnzyme());
const wrapper = shallow(<NewsArticles />);

describe('Test for News Articles', () => {
  describe('#NewsArticles', () => {
    it('component should exist', () => {
      expect(wrapper).to.be.present();
    });
  });
});
