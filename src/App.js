import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bgcolorAction } from './actions/bgcolorAction.js';
import { framecolorAction } from './actions/framecolorAction.js';

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => ({
    bgcolorAction: () => dispatch(bgcolorAction),
    framecolorAction: () => dispatch(framecolorAction)
})

class ColorChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marginLeft: 0,
            bgColor: 'orange',
            frameColor: 'orangered',
        };

        this.swapToFrame = this.swapToFrame.bind(this);
        this.swapToContent = this.swapToContent.bind(this);
        this.colorList = this.colorList.bind(this);
        this.colorSet = this.colorSet.bind(this);
    }

    swapToFrame() {
        this.setState({marginLeft: 0});
    }

    swapToContent() {
        this.setState({marginLeft: -100});
    }

    colorSet(color, frame) {
        if(frame) {
            this.setState({frameColor: color});
            console.log(this.state.frameColor);
        } else {
            this.setState({bgColor: color});
            console.log(this.state.bgColor);

        }

    }

    colorList(frame) {
        const colors = [
            '#bac1b8', '#58a4b0', '#0c7c59', '#2b303a', '#d64933'
        ];

        const liElems = colors.map((item, index) => {
            let liStyle = {
                backgroundColor: item
            }
            return <li key={index} style={liStyle} onClick={() => this.colorSet(item, frame)} ></li>;
        });


        return <ul>{liElems}</ul>
    }

    render() {
        let setupWrapperStyle = {
            marginLeft: this.state.marginLeft + '%',
        };

        return (
            <div className="changer-wrapper">
                <div 
                    className="frame-btn"
                    onClick={this.swapToFrame}
                >
                    Frame
                </div>
                <div 
                    className="content-btn"
                    onClick={this.swapToContent}
                >
                    Content
                </div>
                <div 
                    className="setup-wrapper"
                    style={setupWrapperStyle}
                >
                    <div className="changer-frame">
                        {this.colorList(true)}
                    </div>
                    <div className="changer-content">
                        {this.colorList(false)}
                    </div>
                </div>
            </div>
        );
    }
}

connect()(ColorChanger);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showChanger: true,
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
