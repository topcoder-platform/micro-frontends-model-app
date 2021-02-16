/* global process */

module.exports = (() => {
  const env = process.env.APPENV || "dev";
  if (["prod", "dev", "local"].indexOf(env) < 0) {
    return require("./dev");
  }
  return require("./" + env);
})();
