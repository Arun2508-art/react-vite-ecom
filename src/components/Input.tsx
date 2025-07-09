import classNames from 'classnames';
import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  id?: string;
  className?: string;
};

const Input = ({
  label,
  type,
  name,
  placeholder,
  id,
  className,
  ...props
}: InputProps) => {
  const inputClass = classNames(
    'ring-1 ring-gray-400 p-2 rounded',
    className,
    {}
  );
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label htmlFor={id} className='font-semibold'>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        className={inputClass}
        autoComplete='off'
        {...props}
      />
    </div>
  );
};

export default Input;
