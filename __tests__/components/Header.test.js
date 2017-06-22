import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import sinon from 'sinon';
import * as router from 'react-router';
import Header from '../../src/components/layout/Header';
import User from '../../src/model/User';
import localStorageMock from '../../__mock__/localStorageMock';

window.localStorage = localStorageMock;

chai.use(chaiEnzyme());

describe('Header component', () => {
  const wrapper = mount(<Header />);
  describe('The function responseGoogle()', () => {
  it('should store user data in the local storage', () => {
    const locationSpy = sinon.spy(location, 'reload');
    location.reload();
    sinon.assert.calledOnce(locationSpy);
    const expectedStorage = { user: '{"givenName":"Seun","imageUrl":"image"}' };
    expect(locationSpy.calledOnce).to.be.true;
    locationSpy.restore();
  });
  });

  it('should contain a nav and div component', () => {
    expect(wrapper.find('nav')).to.be.present();
    expect(wrapper.find('div')).to.be.present();
  });

  it('Should call browserHistory.push', () => {
        router.browserHistory = { push: ()=>{} };
        let browserHistoryPushStub = sinon.stub(router.browserHistory, 'push', () => { });
        expect(browserHistoryPushStub).to.have.been.calledOnce;
        browserHistoryPushStub.restore();
    });
});
