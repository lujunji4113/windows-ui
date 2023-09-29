import { UserConfig, defineConfig, mergeConfig } from 'vite'
import { resolve } from 'path'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config, { configType }) {
    let devConfig: UserConfig = {}
    if (configType === 'DEVELOPMENT') {
      devConfig = defineConfig({
        resolve: {
          alias: {
            '@wui/windows': resolve(__dirname, '../../../packages/windows/src')
          }
        }
      })
    }

    return mergeConfig(config, devConfig)
  }
}
export default config
