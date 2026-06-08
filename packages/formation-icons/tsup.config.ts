import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  external: [
    'react',
    'react/jsx-runtime',
    '@mui/icons-material',
    '@mui/material',
    '@emotion/react',
    '@emotion/styled'
  ]
})