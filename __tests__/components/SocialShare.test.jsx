import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import SocialShare from '../../src/components/SocialShare';

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
