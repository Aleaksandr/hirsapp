webpackHotUpdate(0,{

/***/ 236:
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

var _TrainConstants = __webpack_require__(232);

var _TrainConstants2 = _interopRequireDefault(_TrainConstants);

var _TrainNavItemConstants = __webpack_require__(243);

var _TrainNavItemConstants2 = _interopRequireDefault(_TrainNavItemConstants);

var _NavBar = __webpack_require__(229);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _NavItem = __webpack_require__(230);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _TrainButtonBox = __webpack_require__(240);

var _TrainButtonBox2 = _interopRequireDefault(_TrainButtonBox);

var _TrainStationEditorBox = __webpack_require__(241);

var _TrainStationEditorBox2 = _interopRequireDefault(_TrainStationEditorBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrainNavBarBox = function (_React$Component) {
    _inherits(TrainNavBarBox, _React$Component);

    function TrainNavBarBox(props) {
        _classCallCheck(this, TrainNavBarBox);

        var _this = _possibleConstructorReturn(this, (TrainNavBarBox.__proto__ || Object.getPrototypeOf(TrainNavBarBox)).call(this, props));

        _this.handleNavSelect = function (callback) {
            _this.setState({ activeNavItem: callback.itemKey });
        };

        _this.state = {
            activeNavItem: ''
        };
        return _this;
    }

    _createClass(TrainNavBarBox, [{
        key: 'render',
        value: function render() {

            var contentItem = '';
            var isActive = false;

            switch (this.state.activeNavItem) {

                case _TrainNavItemConstants2.default.TRAINS_BUTTON:
                    contentItem = _react2.default.createElement(_TrainButtonBox2.default, null);
                    break;
                case _TrainNavItemConstants2.default.TRAIN_STATION_EDITOR:
                    contentItem = _react2.default.createElement(_TrainStationEditorBox2.default, null);
                    break;
                default:
                    contentItem = _react2.default.createElement(_TrainStationEditorBox2.default, null);
                    isActive = true;
                    break;
            }

            return _react2.default.createElement(
                'div',
                { className: 'container_trains' },
                _react2.default.createElement(
                    _NavBar2.default,
                    { activeNavItem: this.state.activeNavItem, onSelect: this.handleNavSelect },
                    _react2.default.createElement(_NavItem2.default, { active: isActive, navItemKey: _TrainNavItemConstants2.default.TRAIN_STATION_EDITOR, itemText: 'Train Station Editor' }),
                    _react2.default.createElement(_NavItem2.default, { navItemKey: _TrainNavItemConstants2.default.TRAINS_BUTTON, itemText: 'Buttons' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content_trains' },
                    contentItem
                )
            );
        }
    }]);

    return TrainNavBarBox;
}(_react2.default.Component);

exports.default = TrainNavBarBox;


_reactDom2.default.render(_react2.default.createElement(TrainNavBarBox, null), document.getElementById('react-container'));

/***/ })

})
//# sourceMappingURL=0.a501bf33a5d2b4337aa7.hot-update.js.map