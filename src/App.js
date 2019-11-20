import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bgcolorAction } from './actions/bgcolorAction.js';
import { framecolorAction } from './actions/framecolorAction.js';

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => ({
    bgcolorAction: (color) => dispatch(bgcolorAction(color)),
    framecolorAction: (color) => dispatch(framecolorAction(color))
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
    }

    swapToFrame() {
        this.setState({marginLeft: 0});
    }

    swapToContent() {
        this.setState({marginLeft: -100});
    }

    colorList(frame) {
        const colors = [
            '#bac1b8', '#58a4b0', '#0c7c59', '#2b303a', '#d64933'
        ];

        let colorFunc = frame ? this.props.framecolorAction : this.props.bgcolorAction;

        const liElems = colors.map((item, index) => {
            let liStyle = {
                backgroundColor: item
            }
            return <li key={index} style={liStyle} onClick={() => colorFunc(item)} ></li>;
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


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showChanger: true,
            frameBgColor: this.props.frameBgColor, // '#bac1b8',
            contentBgColor: this.props.contentBgColor // '#0c7c59'
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

                <div className="frame" style={{backgroundColor: this.props.frameBgColor}}>
                    <div className="content" style={{backgroundColor: this.props.contentBgColor}}>
                        <div 
                            className="colorChanger"
                            onClick={this.toggleChanger}
                        >
                            Change the color
                        </div>

                        {this.state.showChanger &&
                            <ColorChanger 
                                bgcolorAction={this.props.bgcolorAction} 
                                framecolorAction={this.props.framecolorAction}
                            />
                        }

                    </div>
                </div>
            </div>
         );

    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);
