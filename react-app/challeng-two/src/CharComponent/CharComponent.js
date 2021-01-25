import React from 'react';

const charComponent = (props) => {
  return (
    <div className='char-card' onClick={props.delete}>
      {props.char}
    </div>
  );
};

export default charComponent;
