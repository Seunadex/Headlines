import User from '../../src/model/User';
import { expect } from 'chai';

describe('User model', () => {
	it('should exist', () => {
		expect(User).to.be.an('object');
	});

	it('should log in correctly', () => {
		const response = { profileObj: { name: 'seun', email: 'spydee4real@gmail.com', imageUrl: 'www.imgurl.com'} };
		User.login(response);
		expect(User.isLogin).to.not.equal(false);
		expect(User.isLogin).to.equal(true);
	});

	it('should log the user out correctly', () => {
		User.logOut();
		expect(User.isLogin).to.equal(false);
		expect(User.isLogin).to.not.equal(true);
	});
});