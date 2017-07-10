import React from 'react';
import { mount,shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import NewsSources from '../../src/components/NewsSources';
import Dispatcher from '../../src/dispatcher/AppDispatcher';
import localStorageMock from '../../__mock__/localStorageMock';
import sampleSources from '../../__mock__/sampleSources.json';

window.localStorage = localStorageMock;

jest.mock('../../src/dispatcher/AppDispatcher');

chai.use(chaiEnzyme());

describe('Test for News Sources', () => {
  let wrapper;
  const spyWillUnmount = sinon.spy(NewsSources.prototype, 'componentWillUnmount');
  const event = {
    target: {
      value: 'cnn',
    }
  }

  beforeEach(() => {
    wrapper = mount(<NewsSources />);
  });
  describe('#NewsSources', () => {
    it('should exist', () => {
      expect(wrapper).to.be.present();
    });
    
    it('should contain only one search node', () => {
      expect(wrapper.find('Search')).to.be.present();
      expect(wrapper.find('Search')).to.have.length(1);
    });
  });
  describe('NewsSource', () => {
    it('should be able to set state', () => {
      wrapper = shallow(<NewsSources />)
      wrapper.setState({ sources: [] });
      expect(wrapper.find('.SourcesState.sources')).to.have.length(0);
      wrapper.setState({ search: ''});
      expect(wrapper.find('.event.target.value')).to.have.length(0);
    });
    it('should have props for updateSearch, getSortValue and getNewsSources', () => {
    expect(wrapper.props().updateSearch).to.be.defined;
    expect(wrapper.props().getSortValue).to.be.defined;
    expect(wrapper.props().getNewsSources).to.be.defined;
  }); 
});
  describe("NewsSources", () => {
  
    it('allows us to set props', () => {
      expect(wrapper.node.props.search).to.equal('');
      wrapper.setProps({ search: 'latest' });
      expect(wrapper.node.props.search).to.equal('latest');
      wrapper.setProps({ sources: sampleSources.sources });
      expect(wrapper.node.props.sources).to.equal(sampleSources.sources);
    });
    
    it('Should call onChange event', () => {
      wrapper.instance().onChange();
    });

    it('Should return "cnn"', () => {
      wrapper.instance().updateSearch(event);
      expect(wrapper.state().search).to.equal('cnn');
    });

    it('Should call getSortValue', () => {
      wrapper.instance().getSortValue;
    });
    it('Should have a componentWillUnmount function', () => {
      const componentWillUnmount = sinon.spy();
      expect(componentWillUnmount.callCount).to.equal(0);
    });

    it('Should', () => {
        wrapper.unmount();
        expect(spyWillUnmount.calledOnce);
    });
});
});
