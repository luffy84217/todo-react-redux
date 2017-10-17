import React from 'react';

export default class TodoFooter extends React.Component {
    render() {
        const clearCompletedBtn = this.props.completedCount ?
            <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button> : null;

        return (
            <footer className="footer">
                <span className="todo-count">{this.props.todoCount} left</span>
                <ul className="filters">
                    <li>
                        <a href="#/"
                           className={this.props.showStatus === 'SHOW_ALL'? "selected" : ""}
                           onClick={this.props.setShowStatus.bind(null, 'SHOW_ALL')}
                        >All</a>
                    </li><li>
                        <a href="#/active"
                           className={this.props.showStatus === 'SHOW_ACTIVE'? "selected" : ""}
                           onClick={this.props.setShowStatus.bind(null, 'SHOW_ACTIVE')}
                        >Active</a>
                    </li><li>
                        <a href="#/completed"
                           className={this.props.showStatus === 'SHOW_COMPLETED'? "selected" : ""}
                           onClick={this.props.setShowStatus.bind(null, 'SHOW_COMPLETED')}
                        >Completed</a>
                    </li>
                </ul>
                {clearCompletedBtn}
            </footer>
        );
    }
};