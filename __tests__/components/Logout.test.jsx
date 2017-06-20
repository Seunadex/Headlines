import React from 'react';
import { mount, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import User from '../../src/model/User';
import Logout from '../../src/components/Logout.jsx';
chai.use(chaiEnzyme());
User.response = { profileObj:
  { givenName: 'seun', email: 'spydee4real@gmail.com', imageUrl: 'www.imgurl.com' },
};

describe('Login component', () => {
  afterAll
  it('should exist', () => {
    const wrapper = mount(<Logout />);
    expect(wrapper).to.be.present();
  });
  it('should logout', () => {
    expect(Logout.User.logOut()).to.be(true);
  })
});