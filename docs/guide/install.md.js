webpackJsonp([4],{

/***/ 1545:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "特性"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "一个基于maptalks的React组件"
        ]
      ],
      [
        "li",
        [
          "p",
          "易用，易扩展，开箱即用。"
        ]
      ]
    ],
    [
      "h2",
      "支持环境"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "现代浏览器和 IE9 及以上, 仅仅IE11 支持3D渲染。"
        ]
      ],
      [
        "li",
        [
          "p",
          "移动浏览器。"
        ]
      ],
      [
        "li",
        [
          "p",
          "Electron。"
        ]
      ]
    ],
    [
      "h2",
      "安装"
    ],
    [
      "h3",
      "使用 npm 或 yarn 安装"
    ],
    [
      "p",
      [
        "strong",
        "我们推荐使用 npm 或 yarn 的方式进行开发"
      ],
      "，\n不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，\n享受整个生态圈和工具链带来的诸多好处。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> @sakitam-gis/react-map --save"
      },
      [
        "code",
        "$ npm install @sakitam-gis/react-map --save"
      ]
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn add @sakitam-gis/react-map"
      },
      [
        "code",
        "$ yarn add @sakitam-gis/react-map"
      ]
    ],
    [
      "h3",
      "浏览器引入"
    ],
    [
      "p",
      "在浏览器中使用 ",
      [
        "code",
        "script"
      ],
      " 和 ",
      [
        "code",
        "link"
      ],
      " 标签直接引入文件，并使用全局变量 ",
      [
        "code",
        "ReactMap"
      ],
      "。"
    ],
    [
      "p",
      "我们在 npm 发布包内的 ",
      [
        "code",
        "@sakitam-gis/react-map/dist"
      ],
      " 目录下提供了 ",
      [
        "code",
        "react-map.js"
      ],
      " ",
      [
        "code",
        "react-map.css"
      ],
      "\n 以及 ",
      [
        "code",
        "react-map.min.js"
      ],
      " ",
      [
        "code",
        "react-map.min.css"
      ],
      "。\n 或 ",
      [
        "a",
        {
          "title": null,
          "href": "https://unpkg.com/@sakitam-gis/react-map/dist/"
        },
        "UNPKG"
      ],
      " 进行下载。"
    ],
    [
      "h2",
      "示例"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Map<span class=\"token punctuation\">,</span> TileLayer <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@sakitam-gis/react-map'</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Map</span>\n  <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>map-content<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token attr-name\">center</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token operator\">-</span><span class=\"token number\">0.113049</span><span class=\"token punctuation\">,</span> <span class=\"token number\">51.498568</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token attr-name\">zoom</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>zoom<span class=\"token punctuation\">}</span></span>\n  <span class=\"token attr-name\">events</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n    onload<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleMapLoad\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n<span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TileLayer</span>\n    <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layer<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">renderer</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>gl<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">urlTemplate</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">subdomains</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'c'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'d'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Map</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span>"
      },
      [
        "code",
        "import { Map, TileLayer } from '@sakitam-gis/react-map';\nReactDOM.render(<Map\n  className=\"map-content\"\n  center={[-0.113049, 51.498568]}\n  zoom={zoom}\n  events={{\n    onload: this.handleMapLoad\n  }}\n>\n  <TileLayer\n    id=\"layer\"\n    renderer=\"gl\"\n    urlTemplate=\"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\"\n    subdomains={['a', 'b', 'c', 'd']}\n  />\n</Map>, mountNode)"
      ]
    ],
    [
      "p",
      "引入样式："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">'@sakitam-gis/dist/react-map.css'</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import '@sakitam-gis/dist/react-map.css';"
      ]
    ],
    [
      "h2",
      "链接"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "http://ant.design/"
            },
            "首页"
          ]
        ]
      ]
    ],
    [
      "h2",
      "如何贡献"
    ],
    [
      "p",
      "在任何形式的参与前，请先阅读 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md"
        },
        "贡献者文档"
      ],
      "。\n如果你希望参与贡献，欢迎 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/pulls"
        },
        "Pull Request"
      ],
      "，\n或给我们 ",
      [
        "a",
        {
          "title": null,
          "href": "http://new-issue.ant.design/"
        },
        "报告 Bug"
      ],
      "。"
    ],
    [
      "blockquote",
      [
        "p",
        "强烈推荐阅读 ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"
          },
          "《提问的智慧》"
        ],
        "、\n  ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/seajs/seajs/issues/545"
          },
          "《如何向开源社区提问题》"
        ],
        " 和 \n  ",
        [
          "a",
          {
            "title": null,
            "href": "http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html"
          },
          "《如何有效地报告 Bug》"
        ],
        "、\n  ",
        [
          "a",
          {
            "title": null,
            "href": "https://zhuanlan.zhihu.com/p/25795393"
          },
          "《如何向开源项目提交无法解答的问题》"
        ],
        "，更好的问题更容易获得帮助。"
      ]
    ]
  ],
  "meta": {
    "order": 0,
    "title": "安装",
    "filename": "docs/guide/install.md"
  },
  "description": [
    "section",
    [
      "p",
      "react-map 是一个基于 maptalks 封装的地图组件；帮助你轻松的接入地图到 React 项目中。"
    ]
  ],
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#特性",
          "title": "特性"
        },
        "特性"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#支持环境",
          "title": "支持环境"
        },
        "支持环境"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#安装",
          "title": "安装"
        },
        "安装"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#示例",
          "title": "示例"
        },
        "示例"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#链接",
          "title": "链接"
        },
        "链接"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#如何贡献",
          "title": "如何贡献"
        },
        "如何贡献"
      ]
    ]
  ]
};

/***/ })

});
//# sourceMappingURL=install.md.js.map