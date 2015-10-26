/**
 * Created by ppoborca on 10/23/15.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.HomeHook = HomeHook;

function HomeHook(responses) {
    return {
        DOM: responses.DOM.select('.myinput').events('input').map(function (ev) {
            return ev.target.value;
        }).startWith('').map(function (name) {
            return h('div', [h('label', 'Name:'), h('input.myinput', { attributes: { type: 'text' } }), h('hr'), h('h1', 'Hello ' + name)]);
        })
    };
}

//# sourceMappingURL=HomeView-compiled.js.map