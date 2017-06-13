import React from 'react';
import NewsSources from '../../src/components/NewsSources';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';


chai.use(chaiEnzyme());
const wrapper = shallow(<NewsSources />);

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
});
