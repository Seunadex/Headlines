import React from 'react';
import SocialShare from '../../src/components/SocialShare';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

chai.use(chaiEnzyme());
const wrapper = shallow(<SocialShare />);

describe('Social media share', () => {
  describe('share component', () => {
    it('should exist', () => {
      expect(wrapper).to.be.present();
    });
    it('should have a four social-share className', () => {
      expect((wrapper).find('.social-share')).to.have.length(4);
    });
  });
});
