import React from "react";

const Background = () => {

  return <div className="grid">
    {Array.from({ length:80 }, (_, row) => (
      <div key={row} className="row">
        {Array.from({length: 25}, (_, col) => (
          <div key={col} className="col"></div>
        ))}
      </div>
    ))
        }</div>
};

export default Background;
