import React from 'react';
import logo from './logo.svg';
import './App.css';
import { msgAction } from './actions/msgAction.js';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {...state};
};

const mapDispatchToProps = (dispatch) => {
    return {
        msgAction: (msg) => dispatch(msgAction(msg))
    };
};


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: 'Hello React-Redux'
        }
    }

    render() {
        return (
            <div className="App">
            <h2>Redux-React basics</h2>

            <p>{this.props.msg}</p>
        </div>
        );
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
