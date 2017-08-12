const assert = require("assert");
const throwOr = require("./index.js");
const fs = require("fs");

let assertInvokeCallback = () => {
  let name = "Bob";
  let fullName = "";

  throwOr(name => {
    fullName = `${name} D`;
  })(undefined, name);

  assert.deepEqual(fullName, "Bob D");
};

let assertWrapsError = () => {
  fs.readFile(
    "testData.txt",
    "utf8",
    throwOr(txt => {
      assert.deepEqual(txt, "hi");
    }),
  );
};

assert.throws(() => throwOr("should fail"), /must be a function/);
assert.throws(() => throwOr(data => {})("error"), /Error:/);
assertInvokeCallback();
assertWrapsError();

console.log("Tests pass!");
