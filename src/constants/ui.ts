import { ButtonVariant, ButtonSize } from '@/types/ui';

export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:opacity-90',
  secondary: 'bg-secondary text-white hover:opacity-90',
  outline:
    'border border-primary/20 text-primary hover:bg-primary/5',
  ghost: 'text-primary hover:bg-primary/5'
};

export const BUTTON_SIZES: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base'
};