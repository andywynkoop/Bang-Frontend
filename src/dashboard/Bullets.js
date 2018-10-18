import React from 'react';

const Bullets = ({ number:length, style }) => {
  const imageUrl = "https://s3.amazonaws.com/bang-aa/bullet..png";
  return (
    <div className={style}>
      {Array.apply(null, { length: length }).map((_,i) => <img src={imageUrl} key={i} />)}
    </div>
  );
}

export default Bullets;