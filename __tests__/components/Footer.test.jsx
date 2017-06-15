import React from 'react';
import Footer from '../../src/components/layout/Footer';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';


chai.use(chaiEnzyme());
const wrapper = shallow(<Footer />);

describe('Footer layout', () => {
  describe('test for footer component', () => {
    it('should exist', () => {
      expect(wrapper).to.be.present();
    });
    it('should contain a className=navbar-inverse', () => {
      expect(wrapper.find('div')).to.have.className('navbar-inverse');
    });
  });
});
