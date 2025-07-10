import classNames from 'classnames';
import type { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  const containerClass = classNames(
    'max-w-[1620px] mx-auto px-4 md:px-8 lg:px-16',
    className
  );

  return <div className={containerClass}>{children}</div>;
};

export default Container;
