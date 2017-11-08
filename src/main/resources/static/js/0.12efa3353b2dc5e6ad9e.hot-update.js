webpackHotUpdate(0,{

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _NavItemsConstants = __webpack_require__(237);

var _NavItemsConstants2 = _interopRequireDefault(_NavItemsConstants);

var _NavBar = __webpack_require__(229);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _NavItem = __webpack_require__(230);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _TrainNavBarBox = __webpack_require__(236);

var _TrainNavBarBox2 = _interopRequireDefault(_TrainNavBarBox);

__webpack_require__(239);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main(props) {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

        _this.handleNavSelect = function (callback) {
            _this.setState({ activeNavItem: callback.itemKey });
        };

        _this.state = {
            activeNavItem: ''
        };
        return _this;
    }

    _createClass(Main, [{
        key: 'render',
        value: function render() {

            var contentItem = '';
            switch (this.state.activeNavItem) {
                case _NavItemsConstants2.default.CITIES:
                    break;
                case _NavItemsConstants2.default.HOTELS:
                    break;
                case _NavItemsConstants2.default.PARTNERS:
                    break;
                case _NavItemsConstants2.default.CARS:
                    break;
                case _NavItemsConstants2.default.TRAINS:
                    contentItem = _react2.default.createElement(_TrainNavBarBox2.default, null);
                    break;
                default:
                    contentItem = _react2.default.createElement(_TrainNavBarBox2.default, null);
                    break;
            }

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    _NavBar2.default,
                    { activeNavItem: this.state.activeNavItem, onSelect: this.handleNavSelect },
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _NavItemsConstants2.default.CITIES, itemText: 'Cities' }),
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _NavItemsConstants2.default.HOTELS, itemText: 'Hotels' }),
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _NavItemsConstants2.default.POI, itemText: 'POI' }),
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _NavItemsConstants2.default.AIRPORTS, itemText: 'Airports' }),
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _NavItemsConstants2.default.AIRLINES, itemText: 'Airlines' }),
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _NavItemsConstants2.default.STATISTICS, itemText: 'Statistics' }),
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _NavItemsConstants2.default.MODERATOR_ACTIONS, itemText: 'Moderator actions' }),
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _NavItemsConstants2.default.VISA, itemText: 'Visa' }),
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _NavItemsConstants2.default.PARTNERS, itemText: 'Partners' }),
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _NavItemsConstants2.default.CARS, itemText: 'Cars' }),
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _NavItemsConstants2.default.TRAINS, itemText: 'Trains' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    contentItem
                )
            );
        }
    }]);

    return Main;
}(_react2.default.Component);

exports.default = Main;


_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('react-container'));

/***/ })

})
//# sourceMappingURL=0.12efa3353b2dc5e6ad9e.hot-update.js.map