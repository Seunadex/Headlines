import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import App from '../src/Router';
import User from '../src/model/User';

const wrapper = mount(<App />);

jest.dontMock('../src/Router.js');

describe('<Router />', () => {
  it('should properly run tests', () => {
    expect(2)
      .toBe(2);
  });
  it('renders props correctly', () => {
    const component = shallow(<App name="app" />);
    expect(component.instance()
        .props.name)
      .toBe('app');
  });
  it('should log in correctly', () => {
    expect(User.isLoggedIn).toBeTruthy();
  });
});
