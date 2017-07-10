import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Login from '../../src/components/Login';
import localStorageMock from '../../__mock__/localStorageMock';

window.localStorage = localStorageMock;

chai.use(chaiEnzyme());

describe('Login', () => {
  const wrapper = shallow(<Login />);
  describe('#Login component', () => {
    it('should exist', () => {
      expect(wrapper).to.be.present();
    });
    it('should contain the right props(elements)', () => {
      expect(wrapper).to.have.descendants('div');
      expect(wrapper).to.have.descendants('.container-fluid');
      expect(wrapper).to.have.descendants('p');
      expect(wrapper).to.have.descendants('.loginbody');
    });
  });
});
