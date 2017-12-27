import React from 'react';

const Screen = (props) => {
  return (
    <div className="screen">
      <input type="text" value={props.output}/>
    </div>
  )
}

export default Screen;