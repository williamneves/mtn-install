import dts from 'bun-plugin-dts'

await Bun.build( {
  entrypoints: [ './index.ts' ],
  outdir: './dist',
  minify: true,
  target: 'node',
  plugins: [ dts() ]
} )