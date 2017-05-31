import { EventEmitter } from 'events';
import appDispatcher from '../dispatcher/AppDispatcher';
import NewsActionTypes from '../constants/NewsActionTypes';


const CHANGE_EVENT = 'change';

/**
 * Represents Flux Store for sources component.
 *
 * @class NewsSourcesStore
 * @extends {EventEmitter}
 */
class NewsSourcesStore extends EventEmitter {
  /**
   * Creates an instance of NewsSourcesStore.
   *
   * @memberof NewsSourcesStore
   */
  constructor() {
    super();
    this.sources = [];
  }

  /**
   *
   * @desc gets the value of the sources property
   * @returns {object}
   * @memberof NewsSourcesStore
   */
  getAll() {
    return this.sources;
  }

  /**
   *
   * @description notify the sources component of changes in state.
   * @returns {void}
   * @memberof NewsSourcesStore
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   *
   * @desc adds a listener that communicates state change to the sources component.
   * @param {function} callback listens for state update request from the sources component.
   * @returns {void}
   * @memberof NewsSourcesStore
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   *
   * @desc removes the listener added by addChangeListener,
   * terminates commuincation with the sources componennt.
   * @param {function} callback listens for request from the sources component to stop state update .
   * @returns {void}
   * @memberof NewsSourcesStore
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
const newsSourcesStore = new NewsSourcesStore();

appDispatcher.register((payload) => {
  switch (payload.eventName) {
    case NewsActionTypes.GET_SOURCES:
      newsSourcesStore.sources = payload.sources;
      newsSourcesStore.emitChange();
      break;

    default:
      return true;
  }
});

export default newsSourcesStore;
