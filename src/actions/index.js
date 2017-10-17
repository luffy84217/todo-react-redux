let nextTodoId = 0;

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
};

export const removeTodo = id => {
    return {
        type: 'REMOVE_TODO',
        id
    };
};

export const removeAllTodo = () => {
    return {
        type: 'REMOVE_ALL_TODO'
    };
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export const toggleAllTodo = () => {
    return {
        type: 'TOGGLE_ALL_TODO'
    };
};

export const edit = (id, text) => {
    return {
        type: 'EDIT',
        id: id,
        text: text
    };
}