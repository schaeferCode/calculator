import React from 'react';

const Button = (props) => {
  return (
    <input
      type="button"
      className={props.type === 'action' ? 'button action-button' : 'button input-button'}
      id={props.label === '0' ? 'zero' : 'other'}
      onClick={props.handleClick}
      value={props.label}
    />
  );
}

export default Button;