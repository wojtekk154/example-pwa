import {combineReducers} from 'redux';

import {listsReducer} from './reducers';

export const rootReducer = combineReducers({
    lists: listsReducer
});
