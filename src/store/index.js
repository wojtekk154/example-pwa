import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {loadState, saveState} from './presistState';
import {rootReducer} from '../reducers';

function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export const configstore = configureStore({});

configstore.subscribe(() => console.log(configstore.getState())); //saveState({
    //list: configstore.getState()
// }));
