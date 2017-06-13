/* global describe it */
import { expect } from 'chai';
import User from '../../src/model/User';

const response = { w3:
  { ig: 'seun', U3: 'spydee4real@gmail.com', Paa: 'www.imgurl.com' },
};
User.login(response);

describe('User', () => {
  it('should be in object format', () => {
    expect(User).to.be.an('object');
  });

  it('should log in correctly', () => {
    expect(User.isLogin).to.not.equal(false);
    expect(User.isLogin).to.equal(true);
  });

  it('should log the user out correctly', () => {
    User.logOut();
    expect(User.isLogin).to.equal(false);
    expect(User.isLogin).to.not.equal(true);
  });

  it('should contain correct user details', () => {
    expect(response.w3.ig).to.equal('seun');
    expect(response.w3.U3).to.equal('spydee4real@gmail.com');
    expect(response.w3.Paa).to.equal('www.imgurl.com');
  });
});

