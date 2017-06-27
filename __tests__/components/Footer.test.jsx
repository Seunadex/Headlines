import React from 'react';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import Footer from '../../src/components/layout/Footer';

chai.use(chaiEnzyme());
const wrapper = shallow(<Footer />);

describe('Test for footer layout', () => {
  describe('footer component', () => {
    it('should exist', () => {
      expect(wrapper).to.be.present();
    });
    it('should contain a className=navbar-inverse', () => {
      expect(wrapper.find('div')).to.have.className('navbar-inverse');
    });
  });
});
