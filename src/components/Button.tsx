import classNames from 'classnames';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type buttonVariant = 'primary' | 'secondary' | 'outline';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: buttonVariant;
  active?: boolean;
};

const Button = ({
  children,
  className,
  variant = 'primary',
  active,
  ...props
}: ButtonProps) => {
  const customClasses = classNames('', className, {
    'bg-black rounded-sm p-3 text-white': variant === 'primary',
    'ring-1 ring-black hover:bg-black hover:text-white rounded-sm p-3':
      variant === 'outline',
    'bg-blue-500 text-white rounded-lg p-2 transition-all ease-in duration-300 lg:invisible lg:opacity-0 hover:bg-red-500 group-hover:visible group-hover:opacity-100':
      variant === 'secondary' && !active,
    'bg-red-500 text-white rounded-lg p-2 transition-all ease-in duration-300 lg:invisible lg:opacity-0 hover:bg-red-500 group-hover:visible group-hover:opacity-100':
      variant === 'secondary' && active
  });
  return (
    <button className={customClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
