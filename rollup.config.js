import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";
import alias from "@rollup/plugin-alias";
import path from "path";
import sveltePreprocess from "svelte-preprocess";
import { config as initEnvVars } from "dotenv";

initEnvVars();

const fbConfigReplacement = {
  "process.env.fbApiKey": JSON.stringify(process.env.FB_API_KEY),
  "process.env.fbAuthDomain": JSON.stringify(process.env.FB_AUTH_DOMAIN),
  "process.env.fbProjectId": JSON.stringify(process.env.FB_PROJECT_ID),
  "process.env.fbStorageBucket": JSON.stringify(process.env.FB_STORAGE_BUCKET),
  "process.env.fbAppId": JSON.stringify(process.env.FB_APP_ID),
  "process.env.fbMeasurementId": JSON.stringify(process.env.FB_MEASUREMENT_ID),
  "process.env.fbMasterAccount": JSON.stringify(process.env.FB_MASTER_ACCOUNT),
  "process.env.fbMinionAccount": JSON.stringify(process.env.FB_MINION_ACCOUNT),
};

const scssOptions = {
  transformers: {
    scss: {
      includePaths: ["node_modules", "src"],
    },
  },
};

const projectRootDir = path.resolve(__dirname);

const aliases = {
  entries: [
    {
      find: "src",
      replacement: path.resolve(projectRootDir, "src"),
    },
  ],
};

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      alias(aliases),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
        ...fbConfigReplacement,
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess: sveltePreprocess(scssOptions),
      }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      legacy &&
        babel({
          extensions: [".js", ".mjs", ".html", ".svelte"],
          runtimeHelpers: true,
          exclude: ["node_modules/@babel/**"],
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead",
              },
            ],
          ],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "@babel/plugin-transform-runtime",
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      alias(aliases),
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode),
        ...fbConfigReplacement,
      }),
      svelte({
        generate: "ssr",
        dev,
        preprocess: sveltePreprocess(scssOptions),
      }),
      resolve({
        dedupe: ["svelte"],
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    onwarn,
  },
};
