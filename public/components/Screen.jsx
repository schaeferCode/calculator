import React from 'react';

const Screen = (props) => {
  return (
    <div className="screen">
      <p className="output">{props.output}</p>
    </div>
  )
}

export default Screen;