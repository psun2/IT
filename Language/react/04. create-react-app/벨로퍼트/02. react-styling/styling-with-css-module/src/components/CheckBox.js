import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';

// console.log(styles);

import classNames from 'classnames/bind';
// postcss 와 classNames 라이브 러리 연동(bind)

const cx = classNames.bind(styles);
// postcss 와 classNames 라이브 러리 연동(bind)

const CheckBox = ({ checked, children, ...rest }) => {
  return (
    <div className={cx('checkbox')}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={cx('icon')}>
          {checked ? (
            <MdCheckBox className={cx('checked')} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
};

export default CheckBox;
