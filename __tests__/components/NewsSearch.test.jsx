import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../src/components/NewsSearch';

chai.use(chaiEnzyme());
const wrapper = shallow(<Search />);

describe('NewsSearch', () => {
  describe('Search components', () => {
    it('should exist', () => {
      expect(wrapper).to.be.present();
    });
    it('should contain just one Input field', () => {
      expect(wrapper.find('Input')).to.be.present();
      expect(wrapper.find('Input')).to.have.length(1);
    });
    it('it should contaion only one icon', () => {
      expect(wrapper.find('i')).to.be.present();
      expect(wrapper.find('i')).to.have.length(1);
      expect(wrapper.find('i')).to.not.have.length(6);
    });
  });
});
