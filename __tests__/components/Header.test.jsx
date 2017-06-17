import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Header from '../../src/components/layout/Header';
import User from '../../src/model/User';

chai.use(chaiEnzyme());
const response = { profileObj: {
  givenName: 'seun',
  email: 'spydee4real@gmail.com',
  imageUrl: 'www.imgurl.com' },
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
