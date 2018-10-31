'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

var component = ReasonReact.reducerComponent("AudioPlayer");

function make(podcasts, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var match = self[/* state */1][/* url */0];
              var tmp = match === "" ? "Select correct podcast" : React.createElement("audio", {
                      controls: true,
                      src: self[/* state */1][/* url */0]
                    }, "Your browser des not support audio tag");
              return React.createElement("div", undefined, React.createElement("ul", undefined, $$Array.map((function (item) {
                                    var match = item.enclosure;
                                    if (match !== undefined) {
                                      var enclosure = Js_primitive.valFromOption(match);
                                      return React.createElement("li", {
                                                  onClick: (function () {
                                                      return Curry._1(self[/* send */3], /* SetUrl */[enclosure.url]);
                                                    })
                                                }, item.title);
                                    } else {
                                      return React.createElement("div", undefined);
                                    }
                                  }), podcasts)), tmp);
            }),
          /* initialState */(function () {
              return /* record */[/* url */""];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _) {
              return /* Update */Block.__(0, [/* record */[/* url */action[0]]]);
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
