import fs from "fs";
import path from "path";
import react from "react";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

const componentsDir = path.resolve(__dirname, "./src/components");

const DEFAULT_CONFIG = {
  external: ["react", "@chakra-ui/react"],
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**",
    }),
    resolve({
      extensions: [".js", ".jsx"],
      moduleDirectories: ["node_modules", "src"],
    }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        react: Object.keys(react),
      },
    }),
  ],
};

const config = fs.readdirSync("./src/components").reduce((acc, component) => {
  const isDirectory = fs
    .lstatSync(path.resolve(componentsDir, component))
    .isDirectory();

  if (!isDirectory) {
    return acc;
  }

  const componentDir = path.resolve(componentsDir, component);
  const jsFilePath = path.resolve(componentDir, `${component}.jss`);
  const jsxFilePath = path.resolve(componentDir, `${component}.jsx`);

  acc.push({
    input: fs.existsSync(jsxFilePath) ? jsxFilePath : jsFilePath,
    output: {
      name: `fe-ui/${component}`,
      file: `v2/${component}.js`,
      format: "es",
    },
    ...DEFAULT_CONFIG,
  });

  return acc;
}, []);

export default config;
