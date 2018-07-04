import React from "react";

export default class LoggingButton extends React.Component {

    handleLogin() {
        console.log("This is: ", this)
    };

    render() {
        return(
            <button onClick={this.props.onClick || ((event) => this.handleLogin(event))}>
                Click to login
            </button>
        );
    }
}