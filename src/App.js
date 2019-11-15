import React from 'react';
import logo from './logo.svg';
import './App.css';
import { msgAction } from './actions/msgAction.js';
import { createStore } from 'react';
import { connect } from "react-redux";

const msgReducer = (state, action) => {
    switch(action.type) {
        case 'msg':
            return {...state, ...action.msg}
        default: 
            return state;
    }
};

const store = createStore(msgReducer);

class App extends React.Component {

    render() {
        return (
            <div className="App">
            <h2>Redux-React basics</h2>
        </div>
        );
      }
}

export default connect()(App);
