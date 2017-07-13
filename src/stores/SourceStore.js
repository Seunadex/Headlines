import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';


const CHANGE_EVENT = 'change';

/**
 * Represents Flux Store for sources component.
 *
 * @class SourceStore
 * @extends {EventEmitter}
 */
class SourceStore extends EventEmitter {
  /**
   * Creates an instance of SourceStore.
   *
   * @memberof SourceStore
   */
  constructor() {
    super();
    this.sources = [];
  }

  /**
   *
   * @desc gets the value of the sources property
   * @returns {object} returns an array of the news sources
   * @memberof SourceStore
   */
  getAll() {
    return this.sources;
  }

  /**
   *
   * @description notify the sources component of changes in state.
   * @returns {void}
   * @memberof SourceStore
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   *
   * @desc adds a listener that communicates state change to the sources component.
   * @param {function} callback listens for state update request from the sources component.
   * @returns {void}
   * @memberof SourceStore
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   *
   * @desc removes the listener added by addChangeListener,
   * terminates communication with the sources componennt.
   * @param {function} callback use to stop state update,
   * listens for request from the sources component.
   * @returns {void}
   * @memberof SourceStore
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
const sourceStore = new SourceStore();

Dispatcher.register((payload) => {
  switch (payload.actionName) {
    case Constants.FETCH_SOURCES:
      sourceStore.sources = payload.sources;
      sourceStore.emitChange();
      break;

    default:
      return true;
  }
});

export default sourceStore;
