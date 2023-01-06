// @flow

/**
 * Redux action types and functions
 * @author jhavlicek
 */

export interface Action<T = any> {
    type: string;
    payload: T;
}

export const simpleAction = (actionType: string): Action => ({type: actionType, payload: null});
