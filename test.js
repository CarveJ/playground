const compose = (...fns) =>
  fns.reduce(
    (accum, el) => (el ? accum(el) : accum()),
    async fn => (req, res) => fn(req, res)
  );

const addSomething = fn => (req, res) => {
  req.something = true;
  return fn(req, res);
};

const addAnother = fn => (req, res) => {
  req.another = true;
  return fn(req, res);
};
