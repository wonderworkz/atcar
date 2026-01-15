import React from 'react';

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'medium',
  glass = false,
  ...props
}) => {
  const baseStyles = glass
    ? 'glass rounded-xl lg:rounded-3xl transition-all duration-300'
    : 'bg-white rounded-xl lg:rounded-3xl shadow-glass transition-all duration-300';

  const hoverStyles = hover
    ? 'hover:shadow-glass-heavy hover:-translate-y-1 cursor-pointer'
    : '';

  const paddingStyles = {
    small: 'p-4',
    medium: 'p-5 md:p-6',
    large: 'p-6 md:p-8 lg:p-10',
    none: '',
  };

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
