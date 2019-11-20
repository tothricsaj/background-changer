import { createStore } from 'redux';
import ColorSetterReducer from './reducers/ColorSetterReducer.js';

const defaultStore = {
    marginLeft: 0,
    frameBgColor: '#bac1b8',
    contentBgColor: '#0c7c59',
};

function configStore(state = defaultStore) {
    return createStore(ColorSetterReducer, state);
}

export default configStore;
