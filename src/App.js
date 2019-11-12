import React from 'react';
import logo from './logo.svg';
import './App.css';

class ColorChanger extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="changer-wrapper">
                Kiscica füle
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showChanger: false,
        }

        this.toggleChanger = this.toggleChanger.bind(this);
    }

    toggleChanger() {
        this.setState({showChanger: !this.state.showChanger});
    }

    render() {
        return (
            <div className="App">
                <h2 className="title">
                    Background changer app
                </h2>

                <div className="frame">
                    <div className="content">
                        <div 
                            className="colorChanger"
                            onClick={this.toggleChanger}
                        >
                            Change the color
                        </div>

                        {this.state.showChanger &&
                            <ColorChanger />
                        }

                    </div>
                </div>
            </div>
         );

    }
  }

export default App;
