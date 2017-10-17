const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });

        default:
            return state;
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'REMOVE_TODO':
            return state.filter(t => t.id !== action.id);
        case 'REMOVE_ALL_TODO':
            return state.filter(t => !t.completed);
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        case 'TOGGLE_ALL_TODO':
            return state.map(t => Object.assign({}, t, {
                completed: !t.completed
            }));
        case 'EDIT':
            return state.map(t => {
                if (t.id === action.id) {
                    return Object.assign({}, t, {
                        text: action.text
                    });
                }
                return t;
            });
        default:
            return state;
    }
}

export default todos