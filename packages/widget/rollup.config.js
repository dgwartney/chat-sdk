import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "lib/widget.js",
      format: "umd",
    },
  ],
  plugins: [typescript()],
};
