'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cycleCore = require('@cycle/core');

var _cycleCore2 = _interopRequireDefault(_cycleCore);

var _cycleDom = require('@cycle/dom');

var _homeHomeView = require("./home/HomeView");

var homeHook = _interopRequireWildcard(_homeHomeView);

function main(responses) {
    return homeHook.Header(responses);
}

_cycleCore2['default'].run(main, {
    DOM: (0, _cycleDom.makeDOMDriver)('#main-container')
});

//# sourceMappingURL=app-compiled.js.map