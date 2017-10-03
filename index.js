import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { $ } from './src/utils';
import App from './src/component/App';
import reducer from './src/reducers/combinedReducer';
import press from './src/action/press'
import './src/style.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App type="tool" />
    </Provider>,
    $('#root')
);

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
