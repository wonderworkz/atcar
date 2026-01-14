import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-active active:scale-95 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-10 text-gray-90 hover:bg-gray-60 hover:text-white active:scale-95',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95',
    ghost: 'text-primary hover:bg-primary-10 active:scale-95',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm rounded-button',
    medium: 'px-6 py-3 text-base rounded-button',
    large: 'px-8 py-4 text-lg rounded-button-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
