import React from 'react';

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'medium',
  ...props
}) => {
  const baseStyles = 'bg-white rounded-card-mobile md:rounded-card-tablet lg:rounded-card-desktop transition-all duration-300';

  const hoverStyles = hover
    ? 'hover:shadow-xl hover:-translate-y-2 cursor-pointer'
    : 'shadow-md';

  const paddingStyles = {
    small: 'p-4',
    medium: 'p-6 md:p-8',
    large: 'p-8 md:p-10 lg:p-12',
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
