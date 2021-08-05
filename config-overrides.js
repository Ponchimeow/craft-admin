const {
  override,
  fixBabelImports,
  removeModuleScopePlugin,
  babelInclude,
} = require("customize-cra");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const path = require("path");

module.exports = override(
  removeModuleScopePlugin(),
  babelInclude([
    path.resolve("src"),
    path.resolve("node_modules/lodestar-app-element/src"),
  ]),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  (config, env) => {
    config = rewireReactHotLoader(config, env);
    return config;
  }
);
