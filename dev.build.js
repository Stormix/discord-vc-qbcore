const { build } = require('esbuild');
const { resolve } = require('path');
const { typecheckPlugin } = require('@jgoz/esbuild-plugin-typecheck');

const buildPath = resolve(__dirname, 'dist');

// Server
build({
  entryPoints: ['./src/server/server.ts'],
  outdir: resolve(buildPath, 'server'),
  bundle: true,
  minify: false,
  platform: 'node',
  target: 'node14',
  watch: true,
  logLevel: 'info',
  plugins: [
    typecheckPlugin({
      configFile: './src/server/tsconfig.json',
    }),
  ],
}).catch(() => process.exit(1));

// Client
build({
  entryPoints: ['./src/client/client.ts'],
  outdir: resolve(buildPath, 'client'),
  bundle: true,
  minify: false,
  platform: 'browser',
  target: 'es2020',
  watch: true,
  logLevel: 'info',
  plugins: [
    typecheckPlugin({
      configFile: './src/client/tsconfig.json',
    }),
  ],
}).catch(() => process.exit(1));
