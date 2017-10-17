import React from 'react';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li className={this.props.todo.completed ? "completed" : ""}>
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           checked={this.props.todo.completed ? true : false}
                           onClick={this.props.toggle.bind(null, this.props.todo.id)}
                    />
                    <label onDoubleClick={this.props.edit}>{this.props.todo.text}</label>
                    <button className="destroy" onClick={this.props.destroy.bind(null, this.props.todo.id)} />
                </div>
                <input
                    ref="editField"
                    className="edit"
                    onKeyDown={this.props.editing.bind(this, this.props.todo.id)}
                    onBlur={this.props.blur}
                />
            </li>
        );
    }
};