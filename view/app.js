import Cycle from '@cycle/core';
import {h, makeDOMDriver} from '@cycle/dom';
import * as homeHook from "./home/HomeView";

function main(responses) {
    return homeHook.Header(responses);
}

Cycle.run(main, {
    DOM: makeDOMDriver('#main-container')
});