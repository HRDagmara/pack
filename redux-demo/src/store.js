import { createStore } from 'redux';
import reducer from './reducer.js';
import DevTools from './DevTools';

const store = createStore(
    reducer,
    DevTools.instrument() 
);

export default store;