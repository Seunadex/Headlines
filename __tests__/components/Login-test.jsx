/* global describe it */
import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Login from '../../src/components/Login';

const wrapper = shallow(<Login />);

chai.use(chaiEnzyme());

describe('Login component', () => {
  it('should exist', () => {
    expect(wrapper).to.be.present();
  });
  it('should contain the right descendants(elements)', () => {
    expect(wrapper).to.have.descendants('div');
    expect(wrapper).to.have.descendants('.container-fluid');
    expect(wrapper).to.have.descendants('a');
    expect(wrapper).to.have.descendants('.loginbody');
  });
});
