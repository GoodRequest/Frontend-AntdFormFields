import typescript from "rollup-plugin-typescript2"
import commonjs from "rollup-plugin-commonjs"
import external from "rollup-plugin-peer-deps-external"
import resolve from "rollup-plugin-node-resolve"

import pkg from "./package.json"

export default {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named"
        }
    ],
    plugins: [
        typescript(),
        commonjs({
            namedExports: {
                "node_modules/react/react.js": [
                    "Children",
                    "Component",
                    "PropTypes",
                    "createElement"
                ],
                "node_modules/react-dom/index.js": ["render"],
                "node_modules/rc-util/node_modules/react-is/index.js": ["isFragment", "isMemo"]
            }
        })
    ]
}
