webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = press;
function press(key) {
    if (typeof key === 'number') {
        return {
            type: 'operator',
            value: key
        };
    } else if (key.length === 1) {
        return {
            type: 'operation',
            value: key
        };
    } else {
        return {
            type: 'command',
            value: key
        };
    }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var app = {
    name: 'calculator',
    title: 'ELECTRONIC CALCULATOR',
    config: {
        digitsDisplayLimit: 11,
        decimalPlaceAllowed: 5,
        keyConfig: [[{ key: 'AC', action: 'ALL_CLEAR', class: 'system' }, { key: 'Del', action: 'DELETE', class: 'system' }, { key: '(', action: '(', class: 'operation' }, { key: ')', action: ')', class: 'operation' }], [{ key: '7', action: 7, class: 'operator' }, { key: '8', action: 8, class: 'operator' }, { key: '9', action: 9, class: 'operator' }, { key: '+', action: '+', class: 'operation' }], [{ key: '4', action: 4, class: 'operator' }, { key: '5', action: 5, class: 'operator' }, { key: '6', action: 6, class: 'operator' }, { key: '-', action: '-', class: 'operation' }], [{ key: '1', action: 1, class: 'operator' }, { key: '2', action: 2, class: 'operator' }, { key: '3', action: 3, class: 'operator' }, { key: 'x', action: '*', class: 'operation' }], [{ key: '.', action: '.', class: 'operation' }, { key: '0', action: 0 }, { key: '=', action: 'COMPUTE', class: 'system' }, { key: '÷', action: '/', class: 'operation' }]]
    }
};

exports.default = app;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = entryVerify;

var _app = __webpack_require__(16);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function entryVerify(entry) {

    var operations = ['+', '-', '*', '/'];
    // error occurrs, return 0
    if (entry === 'ERROR') {
        return '0';
    }
    //prevent continuously operators occur
    for (var i = 0; i < operations.length; ++i) {
        if (entry[entry.length - 1] === operations[i]) {
            return operations.indexOf(entry[entry.length - 2]) === -1 ? entry : entry.slice(0, entry.length - 1);
        }
    }
    // prevent infinite decimals from occurring, limit in 4th decimal place
    if (entry.indexOf('.') !== -1) {
        var arr = entry.split('.');

        return arr[0] + '.' + arr[1].slice(0, _app2.default.config.decimalPlaceAllowed);
    }
    // prevent display overflow
    if (entry.length >= _app2.default.config.digitsDisplayLimit) {
        return entry.slice(0, _app2.default.config.digitsDisplayLimit);
    }
    // prevent no number displaying from occurring
    if (entry === '') {
        return '0';
    }
    // deal with zero-start special case 
    if (entry.length === 2 && entry[0] === '0') {
        switch (entry[1]) {
            case '0':
                return '0';
            case '1':
                return '1';
            case '2':
                return '2';
            case '3':
                return '3';
            case '4':
                return '4';
            case '5':
                return '5';
            case '6':
                return '6';
            case '7':
                return '7';
            case '8':
                return '8';
            case '9':
                return '9';
        }
    }
    // no condition return original param
    return entry;
};

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = combinedReducer;

var _command = __webpack_require__(84);

var _command2 = _interopRequireDefault(_command);

var _operation = __webpack_require__(88);

var _operation2 = _interopRequireDefault(_operation);

var _operator = __webpack_require__(89);

var _operator2 = _interopRequireDefault(_operator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function combinedReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { entry: '0', history: [] };
    var action = arguments[1];

    switch (action.type) {
        case 'command':
            return (0, _command2.default)(state, action);
        case 'operation':
            return (0, _operation2.default)(state, action);
        case 'operator':
            return (0, _operator2.default)(state, action);
        default:
            return state;
    }
}

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(7);

var _reactRedux = __webpack_require__(13);

var _utils = __webpack_require__(76);

var _App = __webpack_require__(77);

var _App2 = _interopRequireDefault(_App);

var _combinedReducer = __webpack_require__(33);

var _combinedReducer2 = _interopRequireDefault(_combinedReducer);

var _press = __webpack_require__(15);

var _press2 = _interopRequireDefault(_press);

__webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_combinedReducer2.default);

(0, _utils.getElement)('div', 'root').then(function (element) {

    (0, _utils.$)('main').appendChild(element);

    _reactDom2.default.render(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_App2.default, { type: 'tool' })
    ), (0, _utils.$)('#root'));

    var unsubscribe = store.subscribe(function () {
        return console.log(store.getState());
    });
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.$ = $;
exports.$$ = $$;
exports.getElement = getElement;
function $(selector, el) {
    if (!el) {
        el = document.body;
    }
    return el.querySelector(selector);
}

function $$(selector, el) {
    if (!el) {
        el = document.body;
    }
    return el.querySelectorAll(selector);
}

function getElement(tag, id) {
    return new Promise(function (resolve, reject) {
        var el = document.createElement(tag);
        if (id) {
            el.id = id;
        }
        resolve(el);
    });
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Calculator = __webpack_require__(78);

var _Calculator2 = _interopRequireDefault(_Calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Calculator2.default, null);
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;
;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(13);

var _Calculator = __webpack_require__(79);

var _Calculator2 = _interopRequireDefault(_Calculator);

var _press2 = __webpack_require__(15);

var _press3 = _interopRequireDefault(_press2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        value: state.entry,
        history: state.history
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        press: function press(key) {
            return dispatch((0, _press3.default)(key));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Calculator2.default);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Title = __webpack_require__(80);

var _Title2 = _interopRequireDefault(_Title);

var _Panel = __webpack_require__(81);

var _Panel2 = _interopRequireDefault(_Panel);

var _Board = __webpack_require__(82);

var _Board2 = _interopRequireDefault(_Board);

var _History = __webpack_require__(83);

var _History2 = _interopRequireDefault(_History);

var _redux = __webpack_require__(7);

var _combinedReducer = __webpack_require__(33);

var _combinedReducer2 = _interopRequireDefault(_combinedReducer);

var _app = __webpack_require__(16);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        return _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));
    }

    _createClass(Calculator, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'calculator' },
                _react2.default.createElement(_Title2.default, { name: _app2.default.title }),
                _react2.default.createElement(_Panel2.default, { value: this.props.value, history: this.props.history }),
                _react2.default.createElement(_Board2.default, { press: this.props.press }),
                _react2.default.createElement(_History2.default, { records: this.props.history })
            );
        }
    }]);

    return Calculator;
}(_react2.default.Component);

exports.default = Calculator;
;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_React$Component) {
    _inherits(Title, _React$Component);

    function Title() {
        _classCallCheck(this, Title);

        return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
    }

    _createClass(Title, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "h4",
                { id: "title" },
                _react2.default.createElement(
                    "b",
                    null,
                    this.props.name
                )
            );
        }
    }]);

    return Title;
}(_react2.default.Component);

exports.default = Title;
;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_React$Component) {
    _inherits(Panel, _React$Component);

    function Panel(props) {
        _classCallCheck(this, Panel);

        return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));
    }

    _createClass(Panel, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'entrybox' },
                _react2.default.createElement(
                    'div',
                    { id: 'entry' },
                    _react2.default.createElement(
                        'span',
                        { id: 'cal' },
                        this.props.value
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'ans' },
                    _react2.default.createElement(
                        'span',
                        { id: 'history' },
                        this.props.history[0]
                    )
                )
            );
        }
    }]);

    return Panel;
}(_react2.default.Component);

exports.default = Panel;
;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _press = __webpack_require__(15);

var _press2 = _interopRequireDefault(_press);

var _app = __webpack_require__(16);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_React$Component) {
    _inherits(Board, _React$Component);

    function Board(props) {
        _classCallCheck(this, Board);

        return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));
    }

    _createClass(Board, [{
        key: 'buttonHandler',
        value: function buttonHandler(entry) {
            this.props.press(entry);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var buttons = _app2.default.config.keyConfig.map(function (row, y) {
                return _react2.default.createElement(
                    'tr',
                    { key: y },
                    row.map(function (button, x) {
                        return _react2.default.createElement(
                            'td',
                            { key: x },
                            _react2.default.createElement(
                                'button',
                                { key: button.key, className: button.class, onClick: _this2.buttonHandler.bind(_this2, button.action) },
                                button.key
                            )
                        );
                    })
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'buttons' },
                _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                        'tbody',
                        null,
                        buttons
                    )
                )
            );
        }
    }]);

    return Board;
}(_react2.default.Component);

exports.default = Board;
;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_React$Component) {
    _inherits(History, _React$Component);

    function History(props) {
        _classCallCheck(this, History);

        return _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, props));
    }

    _createClass(History, [{
        key: "render",
        value: function render() {

            var recordList = this.props.records.map(function (record, i) {
                return _react2.default.createElement(
                    "li",
                    { key: i, className: "record" },
                    record
                );
            });

            return _react2.default.createElement(
                "ol",
                { id: "history-list" },
                recordList
            );
        }
    }]);

    return History;
}(_react2.default.Component);

exports.default = History;
;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = operation;

var _EntryTransArray = __webpack_require__(85);

var _EntryTransArray2 = _interopRequireDefault(_EntryTransArray);

var _ShuntingYard = __webpack_require__(86);

var _ShuntingYard2 = _interopRequireDefault(_ShuntingYard);

var _ReversePolishNotation = __webpack_require__(87);

var _ReversePolishNotation2 = _interopRequireDefault(_ReversePolishNotation);

var _EntryVerify = __webpack_require__(17);

var _EntryVerify2 = _interopRequireDefault(_EntryVerify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function operation(state, action) {
    switch (action.value) {
        case 'ALL_CLEAR':
            return Object.assign({}, { entry: '0' }, { history: state.history });
        case 'DELETE':
            return Object.assign({}, { entry: (0, _EntryVerify2.default)(state.entry.slice(0, state.entry.length - 1)) }, { history: state.history });
        case 'COMPUTE':
            var ans = (0, _EntryVerify2.default)((0, _ReversePolishNotation2.default)((0, _ShuntingYard2.default)((0, _EntryTransArray2.default)(state.entry))));

            return Object.assign({}, { entry: ans }, { history: [ans].concat(state.history) });
        default:
            return state;
    }
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = entryTransArray;
function entryTransArray(entry) {
    var regexs = [/([\u002a\u002b\u002d\u002f])/g, /([\u0028])/g, /([\u0029])/g];

    return entry.replace(regexs[0], " $1 ").replace(regexs[1], "$1 ").replace(regexs[2], " $1").split(' ').map(function (element) {
        return isNaN(element) ? element : element * 1;
    });
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ShuntingYard;
var opPriority = function opPriority(operator) {
    switch (operator) {
        case '*':
        case '/':
            return 2;
        case '+':
        case '-':
            return 1;
    }
    return 0;
};

function ShuntingYard(inputArr) {

    var outputArr = [];
    var stack = [];

    while (inputArr.length > 0) {
        if (typeof inputArr[0] === "number") {
            outputArr.push(inputArr.shift());
        } else if (inputArr[0] === '(') {
            stack.unshift(inputArr.shift());
        } else if (inputArr[0] === ')') {
            while (stack[0] !== '(') {
                outputArr.push(stack.shift());
            }
            stack.shift();
            inputArr.shift();
        } else {
            while (stack.length > 0 && opPriority(inputArr[0]) <= opPriority(stack[0])) {
                outputArr.push(stack.shift());
            }
            stack.unshift(inputArr.shift());
        }
    }
    return outputArr.concat(stack);
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getAnsByRPN;
var operation = function operation(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return operand2 + operand1;
        case '-':
            return operand2 - operand1;
        case '*':
            return operand2 * operand1;
        case '/':
            return operand2 / operand1;
    }
};

function getAnsByRPN(inputArr) {
    var stack = [];

    while (inputArr.length > 0) {
        if (typeof inputArr[0] === "number") {
            stack.push(inputArr.shift());
        } else {
            stack.push(operation(inputArr.shift(), stack.pop(), stack.pop()));
        }
    }
    return stack.length == 1 ? stack[0].toString(10) : "ERROR";
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = operation;

var _EntryVerify = __webpack_require__(17);

var _EntryVerify2 = _interopRequireDefault(_EntryVerify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function operation(state, action) {
    var newEntry = state.entry;
    switch (action.value) {
        case '+':
            newEntry += '+';
            return Object.assign({}, {
                entry: (0, _EntryVerify2.default)(newEntry),
                history: state.history
            });
        case '-':
            newEntry += '-';
            return Object.assign({}, {
                entry: (0, _EntryVerify2.default)(newEntry),
                history: state.history
            });
        case '*':
            newEntry += '*';
            return Object.assign({}, {
                entry: (0, _EntryVerify2.default)(newEntry),
                history: state.history
            });
        case '/':
            newEntry += '/';
            return Object.assign({}, {
                entry: (0, _EntryVerify2.default)(newEntry),
                history: state.history
            });
        case '(':
            newEntry += '(';
            return Object.assign({}, {
                entry: (0, _EntryVerify2.default)(newEntry),
                history: state.history
            });
        case ')':
            newEntry += ')';
            return Object.assign({}, {
                entry: (0, _EntryVerify2.default)(newEntry),
                history: state.history
            });
        case '.':
            newEntry += '.';
            return Object.assign({}, {
                entry: (0, _EntryVerify2.default)(newEntry),
                history: state.history
            });
        default:
            return state;
    }
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = operator;

var _EntryVerify = __webpack_require__(17);

var _EntryVerify2 = _interopRequireDefault(_EntryVerify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function operator(state, action) {
    var newEntry = state.entry + action.value.toString(10);

    return Object.assign({}, { entry: (0, _EntryVerify2.default)(newEntry) }, { history: state.history });
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(95)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--1-1!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--1-1!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(92)(undefined);
// imports


// module
exports.push([module.i, "@font-face{font-family:Orbitron;src:url(" + __webpack_require__(93) + ")}@font-face{font-family:Josefin Sans;src:url(" + __webpack_require__(94) + ")}*{box-sizing:border-box;padding:0;border:0;margin:0}ol,ol li,ul,ul li{margin-left:0;padding-left:0}ol,ul{margin-left:2em}body{font-family:Orbitron,sans-serif;background-color:#333}#calculator{width:360px;margin:64px auto 0}#title{padding-top:8px;padding-bottom:8px;margin-bottom:16px;color:#2abcef;text-align:center;text-shadow:1px 1px 1px rgba(0,0,0,.5)}#entrybox{width:336px;height:72px;border-top:2px solid #2abcef;margin:0 auto;background-color:#444;text-align:right}#entry{font-size:36px;color:#f7f7f7}#ans,#entry{margin-right:8px}#history{font-size:9px;color:#8b8b7b}#buttons{width:360px;margin:0 auto}table{border-collapse:collapse}table,td,th{border:12px solid transparent}td{width:90px;height:55px}button{font-family:Orbitron,sans-serif;width:100%;height:100%;border-bottom:#444;color:#f7f7f7;font-size:16px;font-weight:700;background-color:#555;outline:none;cursor:pointer;box-shadow:1px 1px 2px 1px rgba(0,0,0,.2)}button:active{opacity:.7;box-shadow:none;transform:translateY(1px)}button.system{background-color:#2abcef}li.record{width:300px;padding:16px;border-radius:16px;margin-top:16px;background-color:#444;color:#f7f7f7;text-align:right;box-shadow:2px 2px 2px 2px rgba(0,0,0,.2)}", ""]);

// exports


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/Orbitron-Regular.ttf";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/JosefinSans-Regular.ttf";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(96);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 96 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[75]);