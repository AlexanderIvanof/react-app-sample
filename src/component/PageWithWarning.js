import React from "react";
import styles from '../css/main.css'

export default class PageWithWarning extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(previousState => ({
            showWarning: !previousState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className={styles.warning}>
            Warning
        </div>
    );
}