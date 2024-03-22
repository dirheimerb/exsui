import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
    entryPoints: ['index.ts'],
    format: ['cjs', 'esm'],
    sourcemap: true,
    external: ['react'],
    experimentalDts: true,
    metafile: true,
    globalName: 'exsui',
    ...options,
}));
