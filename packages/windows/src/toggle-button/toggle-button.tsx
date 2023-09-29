import { forwardRef } from 'react'
import { Button, ButtonProps } from '../button'

export interface ToggleButtonProps extends ButtonProps {}

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (props, ref) => {
    const { children, ...other } = props

    return (
      <Button ref={ref} {...other}>
        {children}
      </Button>
    )
  }
)
