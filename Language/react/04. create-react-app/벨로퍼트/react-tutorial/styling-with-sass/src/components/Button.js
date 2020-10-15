import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// size: large, medium, small
// color: blue, pink, gray
const Button = ({ children, size, color }) => (
  // <button className={['Button', size].join(' ')}>{children}</button>
  // <button className={`Button ${size}`}>{children}</button>
  <button className={classNames('Button', size, color)}>{children}</button>
);

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
