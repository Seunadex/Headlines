import Header from '../../src/components/layout/Header';
import chai, { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import User from '../../src/model/User';

chai.use(chaiEnzyme());
const response = { w3: { ig: 'seun', U3: 'spydee4real@gmail.com', Paa: 'www.imgurl.com'} };
User.login(response);
const wrapper = shallow(<Header />);

describe('Header component', () => {
	it('should contain a nav and div component', () => {
		expect(wrapper.find('nav')).to.be.present();
		expect(wrapper.find('div')).to.be.present();
	});
});