import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';


const CHANGE_EVENT = 'change';

/**
 *
 * Represents Flux Store for news articles component.
 * @class ArticleStore
 * @extends {EventEmitter}
 */
class ArticleStore extends EventEmitter {
  /**
   * Creates an instance of ArticleStore.
   *
   * @memberof ArticleStore
   */
  constructor() {
    super();
    this.news = [];
  }

  /**
   *
   * @description gets the value of the news property
   * @return {object} returns an object containing the news sources
   * @memberof ArticleStore
   */
  getAll() {
    return this.news;
  }

  /**
   *
   * @description notify the news articles component of changes in state.
   * @returns {void}
   * @memberof articleStore
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }


  /**
   *
   * @desc adds a listener that communicates state change to the sources component.
   * @param {function} callback
   * @returns {void}
   * @memberof ArticleStore
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   *
   * @desc removes the listener added by addChangeListener,
   * terminates communication with the articles component.
   * @param  {function} callback
   * @returns {void}
   * @memberof ArticleStore
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const articleStore = new ArticleStore();

Dispatcher.register((payload) => {
  switch (payload.actionName) {
    case Constants.FETCH_NEWS:
      articleStore.news = payload.news;
      articleStore.emitChange();
      break;

    default:
      return true;
  }
});

export default articleStore;
