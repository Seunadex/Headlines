import { expect } from 'chai';
import User from '../../src/model/User';

const response = { profileObj:
  { givenName: 'seun', email: 'spydee4real@gmail.com', imageUrl: 'www.imgurl.com' },
};
User.login(response);

describe('User', () => {
  it('should be in object format', () => {
    expect(User).to.be.an('object');
  });

  it('should log in correctly', () => {
    expect(User.isLogggedIn).to.not.equal(false);
    expect(User.isLoggedIn).to.equal(true);
  });
});
describe('The component', () => {
  it('should log the user out correctly', () => {
    User.logOut();
    expect(User.isLoggedIn).to.equal(false);
    expect(User.isLoggedIn).to.not.equal(true);
  });

  it('should contain correct user details', () => {
    expect(response.profileObj.givenName).to.equal('seun');
    expect(response.profileObj.email).to.equal('spydee4real@gmail.com');
    expect(response.profileObj.imageUrl).to.equal('www.imgurl.com');
  });
});

