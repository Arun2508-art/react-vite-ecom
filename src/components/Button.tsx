import classNames from 'classnames';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type buttonVariant = 'primary' | 'secondary';

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
  const customClasses = classNames('text-white', className, {
    'bg-black rounded-sm  p-3': variant === 'primary',
    'bg-blue-500 rounded-lg p-2 transition-all ease-in duration-300 invisible opacity-0 hover:bg-red-500 group-hover:visible group-hover:opacity-100':
      variant === 'secondary' && !active,
    'bg-red-500 rounded-lg p-2 transition-all ease-in duration-300 invisible opacity-0 hover:bg-red-500 group-hover:visible group-hover:opacity-100':
      variant === 'secondary' && active
  });
  return (
    <button className={customClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
