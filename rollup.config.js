import fileRoutes from "@axel669/rollup-hono-files"
import resolve from "@rollup/plugin-node-resolve"

export default {
    input: "src/main.js",
    output: {
        file: "build/worker.js",
        format: "esm"
    },
    plugins: [
        fileRoutes,
        resolve()
    ]
}
