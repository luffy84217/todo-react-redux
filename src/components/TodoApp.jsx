import React from 'react';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        const todoList = this.props.todos.map(t =>
            <TodoItem
                key={t.id}
                todo={t}
                toggle={this.props.handleToggleClick}
                edit={this.props.handleEditDBClick}
                editing={this.props.handleEditingKeyDown}
                blur={this.props.handleEditingBlur}
                destroy={this.props.handleDestroyClick}
            />
        );

        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="Something needs to be done."
                        onKeyDown={this.props.handleAddTodoKeyDown}
                    />
                </header>
                <section className="main">
                    <input
                        className="toggle-all"
                        type="checkbox"
                        onClick={this.props.handleToggleAllTodoClick} />
                    <ul className="todo-list">
                        {todoList}
                    </ul>
                </section>
                <TodoFooter
                    setShowStatus={this.props.handleShowClick}
                    showStatus={this.props.visibilityFilter}
                    todoCount={this.props.todoCount}
                    completedCount={this.props.completedCount}
                    clearCompleted={this.props.handleClearCompletedClick}
                />
            </div>
        );
    }
};