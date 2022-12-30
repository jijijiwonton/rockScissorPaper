import React from 'react';

const Box = (props) => {
  console.log('props', props);
  return (
    <div className="box">
      <h1 className="target">{props.target}</h1>
      <img src={props.item && props.item.image} className="object" />
      <h2>{props.gameResult}</h2>
    </div>
  );
};

export default Box;
