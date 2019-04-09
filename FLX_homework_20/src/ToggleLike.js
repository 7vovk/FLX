import React, {Component} from 'react';

export default class ToggleLike extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <p style={{display: 'inline-block', float: 'right', lineHeight: '35px', margin: 9}} onClick={this.handleClick}
               className={this.state.isToggleOn ? 'material-icons btnRed' : 'material-icons btnBlack'}
            >
                favorite
            </p>
        );
    }
}