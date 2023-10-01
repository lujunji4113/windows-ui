import { forwardRef } from 'react'
import clsx from 'clsx'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant?: 'standard' | 'accent' | 'subtle'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = 'standard', className, children, ...other } = props

    return (
      <button
        ref={ref}
        className={clsx(
          'wui-button',
          `wui-button--${variant}`,
          'typography-body',
          className
        )}
        {...other}
      >
        {children}
      </button>
    )
  }
)
