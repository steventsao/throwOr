const throwOr = onSuccess => {
  if (typeof onSuccess !== "function") {
    throw "argument must be a function";
  }
  return (error, data) => {
    if (error) {
      throw `Error: ${error}`;
    }
    onSuccess(data);
  };
};

module.exports = throwOr;
