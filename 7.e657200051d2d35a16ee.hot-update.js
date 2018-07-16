webpackHotUpdate(7,{

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _row = __webpack_require__(210);

var _row2 = _interopRequireDefault(_row);

var _input = __webpack_require__(1510);

var _input2 = _interopRequireDefault(_input);

var _col = __webpack_require__(211);

var _col2 = _interopRequireDefault(_col);

var _popover = __webpack_require__(1515);

var _popover2 = _interopRequireDefault(_popover);

var _icon = __webpack_require__(73);

var _icon2 = _interopRequireDefault(_icon);

var _menu = __webpack_require__(456);

var _menu2 = _interopRequireDefault(_menu);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(2);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _select = __webpack_require__(1516);

var _select2 = _interopRequireDefault(_select);

(function () {
  var enterModule = __webpack_require__(10).enterModule;

  enterModule && enterModule(module);
})();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _router = __webpack_require__(155);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _antd = __webpack_require__(76);

var _utils = __webpack_require__(130);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;

// let docsearch;
// if (typeof window !== 'undefined') {
//   docsearch = require('docsearch.js'); // eslint-disable-line
// }

function initDocSearch() {
  // if (!docsearch) {
  //   return;
  // }
  // const lang = locale === 'zh-CN' ? 'cn' : 'en';
  // docsearch({
  //   apiKey: '60ac2c1a7d26ab713757e4a081e133d0',
  //   indexName: 'ant_design',
  //   inputSelector: '#search-box input',
  //   algoliaOptions: { facetFilters: [`tags:${lang}`] },
  //   transformData(hits) {
  //     hits.forEach(hit => {
  //       hit.url = hit.url.replace('ant.design', location.host);
  //       hit.url = hit.url.replace('https:', location.protocol);
  //     });
  //     return hits;
  //   },
  //   debug: false // Set debug to true if you want to inspect the dropdown
  // });
}

var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      menuVisible: false
    }, _this.handleShowMenu = function () {
      _this.setState({
        menuVisible: true
      });
    }, _this.handleHideMenu = function () {
      _this.setState({
        menuVisible: false
      });
    }, _this.onMenuVisibleChange = function (visible) {
      _this.setState({
        menuVisible: visible
      });
    }, _this.handleVersionChange = function (url) {
      var currentUrl = window.location.href;
      var currentPathname = window.location.pathname;
      window.location.href = currentUrl.replace(window.location.origin, url).replace(currentPathname, utils.getLocalizedPathname(currentPathname));
    }, _this.getMenus = function () {
      var isMobile = _this.context.isMobile;

      var menuMode = isMobile ? 'inline' : 'horizontal';
      var _this$props = _this.props,
          location = _this$props.location,
          _this$props$themeConf = _this$props.themeConfig.header,
          docVersions = _this$props$themeConf.docVersions,
          nav = _this$props$themeConf.nav;

      var docVersionList = (0, _extends3.default)({}, docVersions);
      var versionOptions = Object.keys(docVersionList).map(function (version) {
        return _react2.default.createElement(
          Option,
          { value: docVersionList[version], key: version },
          version
        );
      });
      var module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(0, -1).join('/');
      var activeMenuItem = module || 'home';
      return [_react2.default.createElement(
        _select2.default,
        {
          key: 'version',
          className: 'version',
          size: 'small',
          dropdownMatchSelectWidth: false,
          defaultValue: '0.0.1',
          onChange: _this.handleVersionChange,
          getPopupContainer: function getPopupContainer(trigger) {
            return trigger.parentNode;
          }
        },
        versionOptions
      ), _react2.default.createElement(
        _menu2.default,
        {
          className: 'menu-site',
          mode: menuMode,
          selectedKeys: [activeMenuItem],
          id: 'nav',
          key: 'nav'
        },
        nav && nav.length > 0 ? nav.map(function (item) {
          return _react2.default.createElement(
            _menu2.default.Item,
            { key: item.key },
            _react2.default.createElement(
              _router.Link,
              { to: utils.getLocalizedPathname(item.href, true) },
              item.name
            )
          );
        }) : _react2.default.createElement(
          _menu2.default.Item,
          { key: 'index' },
          _react2.default.createElement(
            _router.Link,
            { to: utils.getLocalizedPathname('/', true) },
            '\u9996\u9875'
          )
        )
      )];
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var router = this.context.router;

      router.listen(this.handleHideMenu);
      var searchInput = this.searchInput;

      document.addEventListener('keyup', function (event) {
        if (event.keyCode === 83 && event.target === document.body) {
          searchInput.focus();
        }
      });
      initDocSearch();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var menuVisible = this.state.menuVisible;
      var isMobile = this.context.isMobile;

      var headerClassName = (0, _classnames2.default)({ clearfix: true });
      var menu = this.getMenus();
      var searchPlaceholder = '在文档中搜索';
      return _react2.default.createElement(
        'header',
        { id: 'header', className: headerClassName },
        isMobile && _react2.default.createElement(
          _popover2.default,
          {
            overlayClassName: 'popover-menu',
            placement: 'bottomRight',
            content: menu,
            trigger: 'click',
            visible: menuVisible,
            arrowPointAtCenter: true,
            onVisibleChange: this.onMenuVisibleChange
          },
          _react2.default.createElement(_icon2.default, {
            className: 'nav-phone-icon',
            type: 'menu',
            onClick: this.handleShowMenu
          })
        ),
        _react2.default.createElement(
          _row2.default,
          null,
          _react2.default.createElement(
            _col2.default,
            { xxl: 4, xl: 5, lg: 5, md: 6, sm: 24, xs: 24 },
            _react2.default.createElement(
              _router.Link,
              { to: utils.getLocalizedPathname('/', true), id: 'logo' },
              _react2.default.createElement(
                'h4',
                { style: { display: 'inline-block', fontSize: '18px' } },
                'React-Map'
              )
            )
          ),
          _react2.default.createElement(
            _col2.default,
            { xxl: 20, xl: 19, lg: 19, md: 18, sm: 0, xs: 0 },
            _react2.default.createElement(
              'div',
              { id: 'search-box' },
              _react2.default.createElement(_icon2.default, { type: 'search' }),
              _react2.default.createElement(_input2.default, {
                ref: function ref(_ref2) {
                  return _this2.searchInput = _ref2;
                },
                placeholder: searchPlaceholder
              })
            ),
            !isMobile && menu
          )
        )
      );
    }
  }]);
  return Header;
}(_react2.default.Component);

Header.contextTypes = {
  router: _propTypes2.default.object.isRequired,
  isMobile: _propTypes2.default.bool.isRequired
};
exports.default = Header;
;

(function () {
  var reactHotLoader = __webpack_require__(10).default;

  var leaveModule = __webpack_require__(10).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initDocSearch, 'initDocSearch', 'D:/github-next/react-map/site/theme/template/layout/Header.jsx');
  reactHotLoader.register(Header, 'Header', 'D:/github-next/react-map/site/theme/template/layout/Header.jsx');
  reactHotLoader.register(Option, 'Option', 'D:/github-next/react-map/site/theme/template/layout/Header.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ })

})
//# sourceMappingURL=7.e657200051d2d35a16ee.hot-update.js.map