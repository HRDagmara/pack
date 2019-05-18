import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/index';
import DevTools from './DevTools';

const store = createStore(
    reducers,
    DevTools.instrument() 
);

store.dispatch(getCountries());

export default store;