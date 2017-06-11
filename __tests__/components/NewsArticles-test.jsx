import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { mount, shallow } from 'enzyme';
import NewsArticles from '../../src/components/NewsArticles';
import User from '../../src/model/User';
import Header from '../../src/components/layout/Header';
import toJson from "enzyme-to-json";

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
