import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/Router.jsx';


describe('<App />', () => {
  it('Should render one <App /> Component ', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
	it('renders props correctly', () => {
	const component = shallow(<App name="app" />);
	expect(component.instance().props.name).toBe("app");
});

});