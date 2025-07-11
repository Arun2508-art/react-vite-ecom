import classNames from 'classnames';
import type { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ children, className, id }: ContainerProps) => {
  const containerClass = classNames(
    'max-w-[1620px] mx-auto px-2 md:px-4 lg:px-8',
    className
  );

  return (
    <div id={id} className={containerClass}>
      {children}
    </div>
  );
};

export default Container;
