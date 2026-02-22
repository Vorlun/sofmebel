'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { BUTTON_VARIANTS, BUTTON_SIZES } from '@/constants/ui';
import { ButtonVariant, ButtonSize } from '@/types/ui';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition duration-200',
          BUTTON_VARIANTS[variant],
          BUTTON_SIZES[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';