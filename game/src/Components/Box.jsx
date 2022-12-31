import React from 'react';

const Box = (props) => {
  const win = 'win';
  const defeat = 'defeat';
  let result;
  if (props.target === 'YOU' && props.result !== 'Tie' && props.result !== '') {
    result = props.result === win ? win : defeat;
  } else {
    result = props.result;
  }

  console.log(props.target);
  return (
    <div className={`box ${result}`}>
      <h1 className="target">{props.target}</h1>
      <img src={props.item && props.item.image} className="object" />
      <h2 className="result">{props.result}</h2>
    </div>
  );
};

export default Box;
