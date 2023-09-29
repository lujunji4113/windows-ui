import { useEffect } from 'react'

export interface ThemeProps {
  /**
   * @default 'light'
   */
  theme?: 'light' | 'dark'
  children?: React.ReactNode
}

export const Theme = (props: ThemeProps) => {
  const { theme = 'light', children } = props

  useEffect(() => {
    const isLightTheme = theme === 'light'
    const themeClassName = isLightTheme ? 'wui-theme-light' : 'wui-theme-dark'
    document.body.classList.add(themeClassName)

    return () => {
      document.body.classList.remove(themeClassName)
    }
  }, [theme])

  return children
}
