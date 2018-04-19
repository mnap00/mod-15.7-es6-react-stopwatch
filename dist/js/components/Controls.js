'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global React:true*/
/*eslint no-undef: "error"*/
/*eslint-disable no-unused-vars*/
var Controls = function (_React$Component) {
    _inherits(Controls, _React$Component);

    function Controls() {
        _classCallCheck(this, Controls);

        return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).apply(this, arguments));
    }

    _createClass(Controls, [{
        key: 'render',
        value: function render() {
            var buttons = this.props.buttons.map(function (button) {
                return React.createElement(Button, {
                    key: button.id,
                    item: button
                });
            });
            return React.createElement(
                'nav',
                { className: 'controls' },
                buttons
            );
        }
    }]);

    return Controls;
}(React.Component);

Controls.PropTypes = {
    buttons: React.PropTypes.array.isRequired
};