import React from 'react';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import NewsSources from '../../src/components/NewsSources';
import Dispatcher from '../../src/dispatcher/AppDispatcher';

jest.mock('../../src/dispatcher/AppDispatcher');
const wrapper = mount(<NewsSources />);
chai.use(chaiEnzyme());

describe('Test for News Sources', () => {
  describe('#NewsSources', () => {
    it('should exist', () => {
      expect(wrapper).to.be.present();
    });
    it('should contain a div element', () => {
      expect(wrapper.find('div')).to.be.present();
    });
    it('should contain only one search node', () => {
      expect(wrapper.find('Search')).to.be.present();
      expect(wrapper.find('Search')).to.have.length(1);
    });
  });
  describe('NewsSource', () => {
    it('should be able to set state', () => {
      wrapper.setState({ sources: [] });
      expect(wrapper.find('.SourcesState.sources')).to.have.length(0);
    });
  });
});
