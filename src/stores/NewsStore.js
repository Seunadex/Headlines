import { EventEmitter } from 'events';
import appDispatcher from '../dispatcher/AppDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';


const CHANGE_EVENT = 'change';

/**
 *
 * Represents Flux Store for news articles component.
 * @class NewsStore
 * @extends {EventEmitter}
 */
class NewsStore extends EventEmitter {
  /**
   * Creates an instance of NewsStore.
   *
   * @memberof NewsStore
   */
  constructor() {
    super();
    this.news = [];
  }

  /**
   * @returns {object}
   * @desc gets the value of the news property
   *
   * @memberof NewsStore
   */
  getAll() {
    return this.news;
  }

  /**
   *
   * @description notify the news articles component of changes in state.
   * @return {void}
   * @memberof NewsStore
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }


  /**
   *
   * @desc adds a listener that communicates state change to the sources component.
   * @param {function} callback
   * @returns {void}
   * @memberof NewsStore
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   *
   * @desc removes the listener added by addChangeListener,
   * terminates commincation with the articles component.
   * @param {function} callback
   * @returns {void}
   * @memberof NewsStore
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

}

const newsStore = new NewsStore();

appDispatcher.register((payload) => {
  switch (payload.eventName) {

    case NewsActionTypes.GET_NEWS:
      newsStore.news = payload.news;
      newsStore.emitChange();
      break;

    default:
      return true;
  }
});

export default newsStore;
