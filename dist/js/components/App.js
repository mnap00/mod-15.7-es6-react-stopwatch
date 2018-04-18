'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global React:true*/
/*eslint no-undef: 'error'*/
/*eslint-disable no-unused-vars*/
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.handleStart = function (e) {
            _this.setState({
                running: true
            });
        };

        _this.handleStop = function (e) {
            _this.setState({
                running: false
            });
        };

        _this.handleReset = function (e) {
            _this.setState({
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            });
        };

        _this.handleSave = function (e) {
            var item = {
                minutes: _this.state.minutes,
                seconds: _this.state.seconds,
                miliseconds: _this.state.miliseconds
            };
            _this.setState({
                results: [].concat(_toConsumableArray(_this.state.results), [item])
            });
        };

        _this.handleClear = function (e) {
            _this.setState({
                results: []
            });
        };

        _this.state = {
            running: false,
            minutes: 0,
            seconds: 0,
            miliseconds: 0,
            results: [
                //{minutes: 13, seconds: 42, miliseconds: 99}
            ]
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.watch = setInterval(function () {
                return _this2.step();
            }, 10);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.watch);
        }
    }, {
        key: 'step',
        value: function step() {
            if (!this.state.running) return;
            this.calculate();
        }
    }, {
        key: 'calculate',
        value: function calculate() {
            this.setState(function (prevState, props) {
                return {
                    miliseconds: prevState.miliseconds + 1
                };
            });
            if (this.state.miliseconds >= 100) {
                this.setState(function (prevState, props) {
                    return {
                        seconds: prevState.seconds + 1,
                        miliseconds: 0
                    };
                });
            }
            if (this.state.seconds >= 60) {
                this.setState(function (prevState, props) {
                    return {
                        minutes: prevState.minutes + 1,
                        seconds: 0
                    };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                { className: 'app' },
                React.createElement(Controls, {
                    buttons: BUTTONS
                }),
                React.createElement(
                    'div',
                    { className: 'test', style: { textAlign: 'center' } },
                    React.createElement(
                        'a',
                        {
                            id: 'testStart',
                            className: 'button',
                            href: '#',
                            onClick: function onClick() {
                                return _this3.handleStart();
                            }
                        },
                        'TestStart'
                    ),
                    React.createElement(
                        'a',
                        {
                            id: 'testStop',
                            className: 'button',
                            href: '#',
                            onClick: function onClick() {
                                return _this3.handleStop();
                            }
                        },
                        'TestStop'
                    ),
                    React.createElement(
                        'a',
                        {
                            id: 'testReset',
                            className: 'button',
                            href: '#',
                            onClick: function onClick() {
                                return _this3.handleReset();
                            }
                        },
                        'TestReset'
                    )
                ),
                React.createElement(Stopwatch, {
                    minutes: this.state.minutes,
                    seconds: this.state.seconds,
                    miliseconds: this.state.miliseconds
                }),
                React.createElement(Results, {
                    results: this.state.results
                })
            );
        }
    }]);

    return App;
}(React.Component);

var BUTTONS = [{ id: 'start', btnName: 'Start' }, { id: 'stop', btnName: 'Stop' }, { id: 'reset', btnName: 'Reset' }, { id: 'save', btnName: 'Save' }, { id: 'clear', btnName: 'Clear' }];

function pad0(value) {
    var result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}