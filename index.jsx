import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { $, getElement } from './src/utils';
import TodoApp from './src/container/TodoApp';
import reducer from './src/reducers/index';
import './src/style.css';

if (process.env.NODE_ENV !== 'production') {
    console.info('Looks like we are in development mode!');
}

const store = createStore(reducer);

getElement('div', 'root')
    .then(element => {

        $('section.todoapp').appendChild(element);

        ReactDOM.render(
            <Provider store={store}>
                <TodoApp />
            </Provider>,
            $('#root')
        );

        const unsubscribe = store.subscribe(() =>
            console.log(store.getState())
        );
    });
