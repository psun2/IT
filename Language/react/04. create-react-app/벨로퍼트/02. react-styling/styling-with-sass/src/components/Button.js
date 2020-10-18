import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// size: large, medium, small
// color: blue, pink, gray
const Button = ({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  // onClick,
  // onMouseMove,
  ...rest
}) => {
  console.log(rest); // Button.js:17 {onClick: ƒ, onMouseMove: ƒ}
  // <button className={['Button', size].join(' ')}>{children}</button>
  // <button className={`Button ${size}`}>{children}</button>
  return (
    <button
      className={classNames(
        'Button',
        size,
        color,
        {
          outline, // outline: outlinr // => outline: true
          fullWidth,
        },
        className,
      )}
      // onClick={onClick}
      // onMouseMove={onMouseMove}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
