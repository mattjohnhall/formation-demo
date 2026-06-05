import path from 'path'
import { fileURLToPath } from 'url'
import type { StorybookConfig } from '@storybook/react-vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(
  fileURLToPath(import.meta.url)
)

const config: StorybookConfig = {
  stories: [
    '../../../packages/**/src/**/*.stories.@(ts|tsx|mdx)'
  ],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  async viteFinal(config) {
    config.plugins ??= []
    config.plugins.push(tailwindcss())

    config.resolve ??= {}
    config.resolve.alias = {
      '@': path.resolve(
        __dirname,
        '../../../packages/formation-england-football/src'
      ),
      '@thefa/formation-icons': path.resolve(
        __dirname,
        '../../../packages/formation-icons/src'
      )
    }

    config.resolve.dedupe = [
      'react',
      'react-dom'
    ]

    return config
  }
}

export default config