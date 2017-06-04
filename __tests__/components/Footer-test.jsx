import Footer from '../../src/components/layout/Footer';
import chai, { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

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
