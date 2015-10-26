/**
 * Created by ppoborca on 10/23/15.
 */
/** @jsx hJSX */
import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX} from '@cycle/dom';
require( './HomeStyle.css');

export function Header(responses){
    return {
        DOM: responses.DOM.select('.myinput').events('input')
            .map(ev => ev.target.value)
            .startWith('')
            .map(name =>
            <p> hi there </p>)
    };
}``