import { cn } from '@/lib/utils';
import { BaseComponentProps } from '@/types/ui';

interface ContainerProps extends BaseComponentProps {
  as?: React.ElementType;
  children: React.ReactNode;
}

export function Container({
  as: Component = 'div',
  className,
  children
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'container mx-auto',
        className
      )}
    >
      {children}
    </Component>
  );
}