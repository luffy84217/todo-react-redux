import React from 'react';
import press from '../action/press';

export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    buttonHandler(entry) {
        this.props.press(entry);
    }

    render() {
        return (
            <div id='buttons'>
                <table>
                    <tbody>
                        <tr>
                            <td><button className='blue system' onClick={this.buttonHandler.bind(this, 'ALL_CLEAR')}>AC</button></td>
                            <td><button className='blue system' onClick={this.buttonHandler.bind(this, 'DELETE')}>Del</button></td>
                            <td><button className="operator" onClick={this.buttonHandler.bind(this, '(')}>(</button></td>
                            <td><button className="operator" onClick={this.buttonHandler.bind(this, ')')}>)</button></td>
                        </tr><tr>
                            <td><button className="number" onClick={this.buttonHandler.bind(this, 7)}>7</button></td>
                            <td><button className="number" onClick={this.buttonHandler.bind(this, 8)}>8</button></td>
                            <td><button className="number" onClick={this.buttonHandler.bind(this, 9)}>9</button></td>
                            <td><button className="operator" onClick={this.buttonHandler.bind(this, '+')}>+</button></td>
                        </tr><tr>
                            <td><button className="number" onClick={this.buttonHandler.bind(this, 4)}>4</button></td>
                            <td><button className="number" onClick={this.buttonHandler.bind(this, 5)}>5</button></td>
                            <td><button className="number" onClick={this.buttonHandler.bind(this, 6)}>6</button></td>
                            <td><button className="operator" onClick={this.buttonHandler.bind(this, '-')}>-</button></td>
                        </tr><tr>
                            <td><button className="number" onClick={this.buttonHandler.bind(this, 1)}>1</button></td>
                            <td><button className="number" onClick={this.buttonHandler.bind(this, 2)}>2</button></td>
                            <td><button className="number" onClick={this.buttonHandler.bind(this, 3)}>3</button></td>
                            <td><button className="operator" onClick={this.buttonHandler.bind(this, '*')}>x</button></td>
                        </tr><tr>
                            <td><button className="number" onClick={this.buttonHandler.bind(this, '.')}>.</button></td>
                            <td><button className="number" onClick={this.buttonHandler.bind(this, 0)}>0</button></td>
                            <td><button className="blue system" onClick={this.buttonHandler.bind(this, 'COMPUTE')}>=</button></td>
                            <td><button className="operator" onClick={this.buttonHandler.bind(this, '/')}>&divide;</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};