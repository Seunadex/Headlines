import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import App from '../src/Router';

jest.dontMock('../src/Router.js');

describe('<App />', () => {
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
});
