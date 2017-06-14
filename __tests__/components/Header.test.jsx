import React from 'react';
import Header from '../../src/components/layout/Header';
import User from '../../src/model/User';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';


chai.use(chaiEnzyme());
const response = { w3: {
  ig: 'seun',
  U3: 'spydee4real@gmail.com',
  Paa: 'www.imgurl.com' },
};
const wrapper = shallow(<Header />);

describe('Header component', () => {
  beforeEach(() => {
    User.login(response);
  });
  it('should contain a nav and div component', () => {
    expect(wrapper.find('nav')).to.be.present();
    expect(wrapper.find('div')).to.be.present();
  });
});
