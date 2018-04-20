import * as types from '../../constants/actions';
import {Map} from 'immutable';

const initState = {
    list: Map(),
    current: {}
};

export function listsReducer(state = initState, action) {
    switch (action.type) {
        case types.GET_LIST_COLLECTION_SUCCESS_ACTION:
            return {...state, list: Map(action.payload)};
        case types.GET_LIST_ITEM_COLLECTION_SUCCESS_ACTION:
            return {
                ...state,
                current: action.payload
            };
        case types.ADD_NEW_ITEM_COLLECTION_SUCCESS_ACTION:
            return {
                ...state,
                list: state.lists.set(state.lists.size, action.payload)
            };
        case types.GET_LIST_ITEM_COLLECTION_FAILURE_ACTION:
        case types.GET_LIST_COLLECTION_FAILURE_ACTION:
        case types.ADD_NEW_ITEM_COLLECTION_FAILURE_ACTION:
            return state;
        default:
            return state;
    }
}