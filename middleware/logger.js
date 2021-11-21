// @desc    Logs request to console
const logger = (req, res, next) => {
  let start = Number(process.hrtime.bigint());
  next();
  let end = Number(process.hrtime.bigint());
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl} ${(
      (end - start) /
      1000000
    ).toPrecision(4)}ms`
  );
};

module.exports = logger;
