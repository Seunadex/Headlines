import React from 'react';
import {
  shallow,
} from 'enzyme';
import expect from 'expect';
import App from '../src/Router';


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
