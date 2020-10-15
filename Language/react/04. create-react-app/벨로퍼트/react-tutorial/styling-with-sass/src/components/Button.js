import React from 'react';
import classNames from 'classnames';
import './Button.scss';

const Button = ({ children, size }) => (
  // <button className={['Button', size].join(' ')}>{children}</button>
  // <button className={`Button ${size}`}>{children}</button>
  <button className={classNames('Button', size)}>{children}</button>
);

Button.defaultProps = {
  size: 'medium',
};

export default Button;
