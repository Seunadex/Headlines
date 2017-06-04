import newsStore from '../../src/stores/NewsStore';
import NewsActionTypes from '../../src/constants/NewsActionTypes';
import appDispatcher from '../../src/dispatcher/AppDispatcher';

jest.mock('../../src/dispatcher/AppDispatcher');
jest.dontMock('../../src/stores/NewsStore');

describe('NewsStore', () => {
	const fetchNews = { 
				eventName: NewsActionTypes.FETCH_NEWS,
				news: [{
					title: 'andela fellows', 
					description: 'Checkout what Andela fellows are up to' }]
				};

let callback;
beforeEach(() => {
	callback = appDispatcher.register.mock.calls[0][0];
});

test('register a callback with th dispatcher', () => {
	expect(appDispatcher.register.mock.calls.length).toBe(1);
});

test('store initializes with no data', () => {
	const allNews = newsStore.getAll().length;
	expect(allNews).toBe(0);
});


});

