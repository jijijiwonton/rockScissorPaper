import React from 'react';

const Box = (props) => {
  return (
    <div className="box">
      <h1 className="target">{props.target}</h1>
      <img
        src="https://images.pexels.com/photos/68562/pexels-photo-68562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="gameObject"
        className="object"
      ></img>
      <h2>{props.gameResult}</h2>
    </div>
  );
};

export default Box;
