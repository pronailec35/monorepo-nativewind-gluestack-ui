import { defineConfig } from "tsdown";

export default defineConfig((options) => ({
  tsconfig: false,
  entry: [
    "src/**/*.(ts|tsx|js|jsx)",
  ],
  format: ['es'],
  inputOptions: {
    transform: {
      jsx: {
        importSource: 'nativewind',
      }
    }
  },
  dts: true,
  treeshake: false,
  splitting: true,
  clean: false,
  sourcemap: false,
  ...options,
}));
