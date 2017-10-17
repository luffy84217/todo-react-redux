import { connect } from 'react-redux'
import { toggleTodo, toggleAllTodo, addTodo, removeTodo, removeAllTodo, setVisibilityFilter, edit } from '../actions'
import TodoApp from '../components/TodoApp'
import { $ } from '../utils';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
};

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter,
        completedCount: state.todos.reduce((a, t) => a + (t.completed ? 1 : 0), 0),
        todoCount: state.todos.reduce((a, t) => a + (t.completed ? 0 : 1), 0)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleToggleClick: id => {
            dispatch(toggleTodo(id));
        },
        handleAddTodoKeyDown: event => {
            const KEY_ENTER = 13;

            if (event.keyCode !== KEY_ENTER) {
                return;
            }

            dispatch(addTodo(event.target.value));
            event.target.value = '';
        },
        handleDestroyClick: id => {
            dispatch(removeTodo(id));
        },
        handleShowClick: filter => {
            dispatch(setVisibilityFilter(filter));
        },
        handleClearCompletedClick: () => {
            dispatch(removeAllTodo());
        },
        handleToggleAllTodoClick: () => {
            dispatch(toggleAllTodo());
        },
        handleEditDBClick: event => {
            event.target.parentElement.parentElement.classList.add('editing');
            event.target.parentElement.nextSibling.focus();
        },
        handleEditingKeyDown: (id, event) => {
            const KEY_ENTER = 13;
            const KEY_ESC = 27;
            const li = event.target.parentElement.classList
            
            if (event.keyCode === KEY_ESC) {
                li.remove('editing');
            }

            if (event.keyCode === KEY_ENTER) {
                dispatch(edit(id, event.target.value));
                li.remove('editing');
            }
        },
        handleEditingBlur: event => {
            event.target.parentElement.classList.remove('editing');
        }
    };
};

const TodoAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);

export default TodoAppContainer