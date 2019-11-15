import React from 'react';
import logo from './logo.svg';
import './App.css';
import { msgAction } from './actions/msgAction.js';

const msgReducer = (state, action) => {
    switch(action.type) {
        case 'msg':
            return {...state, ...action.msg}
        default: 
            return state;
    }
};

class App extends React.Component {

    render() {
        return (
            <div className="App">
            <h2>Redux-React basics</h2>
        </div>
        );
      }
}

export default App;
