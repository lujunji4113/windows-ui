import { Theme } from '@wui/windows'
import type { Preview } from '@storybook/react'
import '@wui/windows/styles/themes/index.css'

enum BackgroundColors {
  light = '#fafafa',
  dark = '#1c1c1c'
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: BackgroundColors.light
        },
        {
          name: 'dark',
          value: BackgroundColors.dark
        }
      ]
    }
  },
  decorators: [
    (Story, context) => {
      const backgrounds = context.globals.backgrounds as null | {
        value: BackgroundColors
      }
      const isDarkTheme = backgrounds?.value === BackgroundColors.dark
      const theme = isDarkTheme ? 'dark' : 'light'

      return (
        <Theme theme={theme}>
          <Story />
        </Theme>
      )
    }
  ]
}

export default preview
