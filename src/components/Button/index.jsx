import React from 'react';

import clsx from 'clsx'

import './styles.css';

const Button = ({ label, onClick, disabled, buttonType }) => {
  
  return (
    <button
      type="button"
      className={clsx("button", `button-${buttonType}`)}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button;