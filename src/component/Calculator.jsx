import React from 'react';
import Title from './Title';
import Panel from '../component/Panel';
import Board from '../component/Board';
import History from '../component/History';
import { createStore } from 'redux';
import reducer from '../reducers/combinedReducer';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="calculator">
                <Title name={this.props.name} />
                <Panel value={this.props.value} history={this.props.history} />
                <Board press={this.props.press} />
                <History records={this.props.history} />
            </div>
        );
    }
};