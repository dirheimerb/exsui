import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
    entryPoints: ['./index.ts'],
    format: ['cjs', 'esm'],
    sourcemap: true,
    experimentalDts: true,
    metafile: true,
    globalName: 'utils',
    ...options,
}));
