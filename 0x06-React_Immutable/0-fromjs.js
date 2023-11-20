const { fromJS } = require("immutable");

const getImmutableObject = (obv) => fromJS(obv);

console.log(
  getImmutableObject({
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
  })
);
