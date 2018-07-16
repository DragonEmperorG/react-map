webpackJsonp([1],{

/***/ 1546:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(1557),
}

/***/ }),

/***/ 1557:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "h2",
      "summary"
    ],
    [
      "p",
      "地图基本展示。"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "基础使用",
    "filename": "examples/index/demo/basic.md",
    "id": "examples-index-demo-basic"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#summary",
          "title": "summary"
        },
        "summary"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Map<span class=\"token punctuation\">,</span> TileLayer <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@sakitam-gis/react-map'</span>\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Index</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  constructor <span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">,</span> context<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">,</span> context<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      zoom<span class=\"token punctuation\">:</span> <span class=\"token number\">14</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// 组件已经加载到dom中</span>\n  componentDidMount <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleMapLoad <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>map<span class=\"token punctuation\">,</span> event<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>map<span class=\"token punctuation\">,</span> event<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  render <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> zoom <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Map</span>\n        <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>map-content<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">center</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token operator\">-</span><span class=\"token number\">0.113049</span><span class=\"token punctuation\">,</span> <span class=\"token number\">51.498568</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">zoom</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>zoom<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">events</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n          onload<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleMapLoad\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TileLayer</span>\n          <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layer<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">renderer</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>gl<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">urlTemplate</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">subdomains</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'c'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'d'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Map</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Index</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(11);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _reactMap = __webpack_require__(582);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props, context) {
      _classCallCheck(this, Index);

      var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props, context));

      _this.handleMapLoad = function (map, event) {
        console.log(map, event);
      };

      _this.state = {
        zoom: 14
      };
      return _this;
    } // 组件已经加载到dom中


    _createClass(Index, [{
      key: "componentDidMount",
      value: function componentDidMount() {}
    }, {
      key: "render",
      value: function render() {
        var zoom = this.state.zoom;
        return React.createElement(
          _reactMap.Map,
          {
            className: "map-content",
            center: [-0.113049, 51.498568],
            zoom: zoom,
            events: {
              onload: this.handleMapLoad
            }
          },
          React.createElement(_reactMap.TileLayer, {
            id: "layer",
            renderer: "gl",
            urlTemplate: "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
            subdomains: ['a', 'b', 'c', 'd']
          })
        );
      }
    }]);

    return Index;
  }(React.Component);

  return React.createElement(Index, null);
},
  "style": "\n.map-content {\n  width: 100%;\n  height: 300px;\n}\n"
};

/***/ })

});
//# sourceMappingURL=demo.js.map