'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var ApolloProvider = require("reason-apollo/src/ApolloProvider.bs.js");
var Client$ReasonReactExample = require("./Client.bs.js");
var Podcasts$ReasonReactExample = require("./Podcasts.bs.js");

var component = ReasonReact.statelessComponent("Page");

var ppx_printed_query = "query getFeed  {\nrss  {\nrss2Feed(url: \"http://podcasts.files.bbci.co.uk/p02pc9pj.rss\")  {\nitems  {\nenclosure  {\nurl  \n}\n\ntitle  \n}\n\ntitle  \n}\n\n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_primitive.valFromOption(match)["rss"];
    var tmp;
    if (match$1 !== undefined) {
      var match$2 = Js_json.decodeObject(match$1);
      if (match$2 !== undefined) {
        var match$3 = Js_primitive.valFromOption(match$2)["rss2Feed"];
        var tmp$1;
        if (match$3 !== undefined) {
          var match$4 = Js_json.decodeObject(match$3);
          if (match$4 !== undefined) {
            var value$1 = Js_primitive.valFromOption(match$4);
            var match$5 = value$1["items"];
            var tmp$2;
            if (match$5 !== undefined) {
              var match$6 = Js_json.decodeArray(match$5);
              tmp$2 = match$6 !== undefined ? match$6.map((function (value) {
                        var match = Js_json.decodeObject(value);
                        if (match !== undefined) {
                          var value$1 = Js_primitive.valFromOption(match);
                          var match$1 = value$1["enclosure"];
                          var tmp;
                          if (match$1 !== undefined) {
                            var match$2 = Js_json.decodeNull(match$1);
                            if (match$2 !== undefined) {
                              tmp = undefined;
                            } else {
                              var match$3 = Js_json.decodeObject(match$1);
                              var tmp$1;
                              if (match$3 !== undefined) {
                                var match$4 = Js_primitive.valFromOption(match$3)["url"];
                                var tmp$2;
                                if (match$4 !== undefined) {
                                  var match$5 = Js_json.decodeString(match$4);
                                  tmp$2 = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$4));
                                } else {
                                  tmp$2 = Js_exn.raiseError("graphql_ppx: Field url on type Rss2Enclosure is missing");
                                }
                                tmp$1 = {
                                  url: tmp$2
                                };
                              } else {
                                tmp$1 = Js_exn.raiseError("graphql_ppx: Object is not a value");
                              }
                              tmp = Js_primitive.some(tmp$1);
                            }
                          } else {
                            tmp = undefined;
                          }
                          var match$6 = value$1["title"];
                          var tmp$3;
                          if (match$6 !== undefined) {
                            var match$7 = Js_json.decodeString(match$6);
                            tmp$3 = match$7 !== undefined ? match$7 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$6));
                          } else {
                            tmp$3 = Js_exn.raiseError("graphql_ppx: Field title on type Rss2FeedItem is missing");
                          }
                          return {
                                  enclosure: tmp,
                                  title: tmp$3
                                };
                        } else {
                          return Js_exn.raiseError("graphql_ppx: Object is not a value");
                        }
                      })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(match$5));
            } else {
              tmp$2 = Js_exn.raiseError("graphql_ppx: Field items on type Rss2Channel is missing");
            }
            var match$7 = value$1["title"];
            var tmp$3;
            if (match$7 !== undefined) {
              var match$8 = Js_json.decodeString(match$7);
              tmp$3 = match$8 !== undefined ? match$8 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(match$7));
            } else {
              tmp$3 = Js_exn.raiseError("graphql_ppx: Field title on type Rss2Channel is missing");
            }
            tmp$1 = {
              items: tmp$2,
              title: tmp$3
            };
          } else {
            tmp$1 = Js_exn.raiseError("graphql_ppx: Object is not a value");
          }
        } else {
          tmp$1 = Js_exn.raiseError("graphql_ppx: Field rss2Feed on type RssQuery is missing");
        }
        tmp = {
          rss2Feed: tmp$1
        };
      } else {
        tmp = Js_exn.raiseError("graphql_ppx: Object is not a value");
      }
    } else {
      tmp = Js_exn.raiseError("graphql_ppx: Field rss on type Query is missing");
    }
    return {
            rss: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make() {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables() {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function ret_type() {
  return /* module */[];
}

var MT_Ret = /* module */[];

var GetPodcasts = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var GetPodcastsQuery = ReasonApollo.CreateQuery([
      ppx_printed_query,
      parse
    ]);

function make$1() {
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
          /* render */(function () {
              return ReasonReact.element(undefined, undefined, ApolloProvider.make(Client$ReasonReactExample.instance, /* array */[ReasonReact.element(undefined, undefined, Curry.app(GetPodcastsQuery[/* make */3], [
                                        undefined,
                                        undefined,
                                        undefined,
                                        undefined,
                                        undefined,
                                        undefined,
                                        undefined,
                                        undefined,
                                        undefined,
                                        (function (param) {
                                            var result = param[/* result */0];
                                            if (typeof result === "number") {
                                              return React.createElement("div", undefined, "Loading");
                                            } else if (result.tag) {
                                              return React.createElement("div", undefined, ReasonReact.element(undefined, undefined, Podcasts$ReasonReactExample.make(result[0].rss.rss2Feed, /* array */[])));
                                            } else {
                                              return React.createElement("div", undefined, result[0].message);
                                            }
                                          })
                                      ]))]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.GetPodcasts = GetPodcasts;
exports.GetPodcastsQuery = GetPodcastsQuery;
exports.make = make$1;
/* component Not a pure module */
