import * as actions from '../constants/actions';
export function getListSuccessAction(payload) {
    return {
        type: actions.GET_LIST_COLLECTION_SUCCESS_ACTION,
        payload
    };
}

export function getListFailureAction() {
    return {
        type: actions.GET_LIST_COLLECTION_FAILURE_ACTION
    };
}

export function addNewListSuccessAction(payload) {
    return {
        type: actions.ADD_NEW_ITEM_COLLECTION_SUCCESS_ACTION,
        payload
    };
}

export function addNewListFailureAction() {
    return {
        type: actions.ADD_NEW_ITEM_COLLECTION_FAILURE_ACTION
    };
}

export function getListItemSuccessAction(payload) {
    return {
        type: actions.GET_LIST_ITEM_COLLECTION_SUCCESS_ACTION,
        payload
    };
}

export function getListItemFailureAction() {
    return {
        type: actions.GET_LIST_ITEM_COLLECTION_FAILURE_ACTION
    };
}