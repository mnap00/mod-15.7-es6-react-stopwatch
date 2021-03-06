'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global React:true*/
/*eslint no-undef: "error"*/
/*eslint-disable no-unused-vars*/
var Results = function (_React$Component) {
    _inherits(Results, _React$Component);

    function Results() {
        _classCallCheck(this, Results);

        return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
    }

    _createClass(Results, [{
        key: 'render',
        value: function render() {
            var results = this.props.results.map(function (result, index) {
                return React.createElement(Result, { key: index, item: result });
            });
            return React.createElement(
                'ul',
                { className: 'results' },
                results
            );
        }
    }]);

    return Results;
}(React.Component);

Results.PropTypes = {
    results: React.PropTypes.array.isRequired
};