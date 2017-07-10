import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import App from '../src/Router';
import User from '../src/model/User';

jest.dontMock('../src/Router');
User.isLoggedIn = true;
describe('<Router />', () => {
  const wrapper = shallow(<App />);

  it('renders props correctly', () => {
    const component = shallow(<App name="app" />);
    expect(component.instance()
        .props.name)
      .toBe('app');
  });
  it('should log in correctly', () => {
    wrapper.instance().requireAuth();
    User.isLoggedIn = false;
    wrapper.instance().verifyAuth();
  });
  it('should properly run tests', () => {
    expect(2)
      .toBe(2);
  });
});
