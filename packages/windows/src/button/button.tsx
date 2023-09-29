import { forwardRef } from 'react'
import clsx from 'clsx'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, children, ...other } = props

    return (
      <button ref={ref} className={clsx('wui-button', className)} {...other}>
        {children}
      </button>
    )
  }
)
