import { ActionsObservable } from 'redux-observable';

import * as actions from '../actions';
import { decrementAsyncEpic, decrementIfEvenEpic } from '../epics';

describe('Counter', () => {
  describe('epics', () => {
    it('should call get decrementAsyncEpic', () => {
      const observable = new ActionsObservable(actions);
      expect(decrementAsyncEpic(observable)).toMatchSnapshot();
    });

    it('should call get decrementIfEvenEpic', () => {
      const observable = new ActionsObservable(actions);
      expect(decrementIfEvenEpic(observable)).toMatchSnapshot();
    });
  });
});