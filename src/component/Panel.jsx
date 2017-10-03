import React from 'react';

export default class Panel extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id='entrybox'>
                <div id='entry'>
                    <span id='cal'>{this.props.value}</span>
                </div>
                <div id="ans">
                    <span id='history'>{this.props.history[0]}</span>
                </div>
            </div>
        );
    }
};