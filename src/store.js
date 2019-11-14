import { createStore } from 'redux';
import ColorSetterReducer from './reducers/ColorSetterReducer.js';

const defaultStore = {
    marginLeft: 0,
    bgColor: '#0c7c59',
    frameColor: '#bac1b8',
};

function configStore(store = defaultStore) {
    createStore(ColorSetterReducer, state);
}

export default configStore;
